import { EventSubscriberInterface, EventSubscribersMeta} from "@tshio/event-dispatcher";
import { PaymentProvider } from '@frappe/payment/domain'
import { StripeProductCreated } from "@frappe/product/domain";
import { wrapError } from "@frappe/common/utils";

interface CreateStripePriceOnProductCreatedDeps {
  readonly paymentProvider: PaymentProvider;
}

export class CreateStripePriceOnProductCreated implements EventSubscriberInterface {
  private readonly paymentProvider: PaymentProvider;

  constructor({ paymentProvider }: CreateStripePriceOnProductCreatedDeps) {
    this.paymentProvider = paymentProvider;
  }

  getSubscribedEvents(): EventSubscribersMeta[] {
    return [{ name: StripeProductCreated.name, method: 'execute' }];
  }

  async execute(event: StripeProductCreated) {
    const [error] = await wrapError(this.paymentProvider.createPrice(event.payload.id, event.payload.price));
    
    if(error !== null) {
      console.log(error);
      return;
    }
  }
}