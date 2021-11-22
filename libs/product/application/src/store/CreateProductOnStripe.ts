import { EventSubscriberInterface, EventSubscribersMeta } from "@tshio/event-dispatcher";
import { PaymentProvider } from '@frappe/payment/domain'
import { Product, ProductCreated } from "@frappe/product/domain";
import { wrapError } from "@frappe/common/utils";

interface CreateProductOnStripeDeps {
  readonly paymentProvider: PaymentProvider;
}

export class CreateProductOnStripe implements EventSubscriberInterface {
  private readonly paymentProvider: PaymentProvider;

  constructor({ paymentProvider }: CreateProductOnStripeDeps) {
    this.paymentProvider = paymentProvider;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [{ name: ProductCreated.name, method: 'execute' }];
  }

  async execute(event: ProductCreated) {
    const product = Product.fromPrimitives(event.payload)
    const [error] = await wrapError(this.paymentProvider.createProduct(product))
    
    if(error !== null) {
      console.log(error);
      return;
    }

    const [priceError] = await wrapError(this.paymentProvider.createPrice(product.id.value, product.price.value));

    if (priceError !== null) {
      console.log(priceError.message);
    }
  }
}