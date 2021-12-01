//User Story: Frappe-85
import {
  OrderRepository,
  OrderNotFound,
  Order,
  OrderPrimitives
} from '@frappe/order/domain';
import {FileSystemFileUploader} from '@frappe/file-system/application'
import { OrderFinder } from '..';
import PDFTable from "pdfkit-table";
import fs from "fs"
import { Uuid } from '@frappe/common/value-object';
import axios from "axios"

interface Props {
  readonly orderRepository: OrderRepository;
  readonly orderFinder: OrderFinder;
  readonly fileUploader: FileSystemFileUploader;
}

export class OrderPdfGenerator {
  private readonly orderRepository: OrderRepository;
  private readonly orderFinder: OrderFinder;
  private readonly fileUploader: FileSystemFileUploader

  constructor({ orderRepository, orderFinder, fileUploader }: Props) {
    this.orderRepository = orderRepository;
    this.orderFinder = orderFinder;
    this.fileUploader = fileUploader;
  }

  async execute(
    id: string,
  ) {
    const order = await this.orderExists(id);

    if (order === null) {
      throw new OrderNotFound(id);
    }
    
    await this.generatePdf(order)
    
    const azureUrl = `https://${process.env.AZURE_ACCOUNT_NAME}.blob.core.windows.net/${process.env.AZURE_CONTAINER_NAME}/`
    const fileName = `${Uuid.create().value}.pdf`
    const pdfUrl = azureUrl.concat(fileName)
    
    const updatedOrder: OrderPrimitives = {
      ...order,
      pdfFile: pdfUrl
    }
    this.orderRepository.save(Order.fromPrimitives(updatedOrder));

    const docBuffer = fs.readFileSync("/tmp/output.pdf");
    await this.fileUploader.execute(fileName, docBuffer);
    return pdfUrl;

  }

  private async orderExists(id: string): Promise<OrderPrimitives> {
    try {
      const order = await this.orderFinder.execute(id);
      return order as OrderPrimitives;
    } catch (error) {
      return error;
    }
  }

  private async generatePdf(order: OrderPrimitives): Promise<void> {
    const monthNames = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ];
  
    const prettyDate = new Date(order.dateCreated);
    const year = prettyDate.getUTCFullYear();
    const month = prettyDate.getUTCMonth();
    const day = prettyDate.getUTCDate();
    
    // Create a document
    const doc = new PDFTable()
    //const doc = new PDFDocument();
    
    // Add another page
    doc
      .fontSize(18)
      .text(`Ficha Técnica Cínica.mx`, {align: "center"})
      .fontSize(12)
      .text(`\nid: ${order.id}`)
      .text(`\nFecha: ${day} de ${monthNames[month]} del ${year}`, {})
      await Promise.all(order.items.map(async item => {
        
        const { data } = await axios.get(item.productImages[0], { responseType: "arraybuffer" })
        const tableRows = item.customParts?.map(part => (
          [part.section, part.material]
        ))
        const tableArray = {
          headers: [
            {label: "Parte", headerColor: "#fcb900"},
            {label: "Material", headerColor: "#fcb900"},
          ],
          rows: tableRows,
        };
        
        doc
        .fontSize(16)
        .text(`\n\n${item.productName}\n\n`, {underline: true})
        .fontSize(12)
        .text(`Cantidad: ${item.quantity}`)
        .text(`Talla: ${item.size}\n\n`)
        .image(data, {width: 175 })
        .moveDown()
        .moveDown()

        item.customParts ?? doc.fontSize(16)
        .text("Personalización", {underline: true})
        .moveDown()
        .table(tableArray)
      }))
      
      
    // Finalize PDF file
    doc.end();
    const docPipePromise = new Promise<void>((resolve, reject) => {
      const docPipe = doc.pipe(fs.createWriteStream("/tmp/output.pdf"))
      docPipe.on("finish", () => {
        resolve();
      }).on("error", (error) => {
        reject(error)
      })
    })

    return docPipePromise;
  }
}
