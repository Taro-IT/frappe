import { BlobServiceClient, BlockBlobParallelUploadOptions, ContainerClient } from '@azure/storage-blob';
import { FileSystemFile, FileSystemRepository } from '@frappe/file-system/domain'

  /**
  * Manages the connection with Azure's blob storage
  */
export class AzureFileSystemRepository implements FileSystemRepository {
  private readonly container: ContainerClient;
  
  constructor() {
    const client: BlobServiceClient = BlobServiceClient.fromConnectionString(`${process.env.AZURE_CONNECTION_STRING}`);

    this.container = client.getContainerClient(process.env.AZURE_CONTAINER_NAME);
  }
  
  /**
  * Uploads a new File into the Azure Blob Storage @see {@link FileSystemFile}
  * @param file - The file that will be uploaded
  */
  async upload(file: FileSystemFile): Promise<void>{
    const { name, content } = file.toPrimitives();
    const client = this.container.getBlockBlobClient(name);

    //@ts-ignore: Ignored bc vlad said
    const options: BlockBlobParallelUploadOptions = { blobHTTPHeaders: { blobContentType: this.isFile(content) ? file.content.value.mimetype : undefined } };
    await client.uploadData(content, options);
    
  }

  private isFile(file: File | Buffer): file is File {
    return (file as File).name !== undefined
  }
}