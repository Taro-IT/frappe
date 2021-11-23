//FRAPPE-81
import { PaymentProvider } from '@frappe/payment/domain'
import { EventDispatcher } from '@tshio/event-dispatcher';
import { ProductId } from '@frappe/product/domain';

interface Props {
  readonly paymentProvider: PaymentProvider;
  readonly eventBus: EventDispatcher;
}

export class PaymentSessionCreator {
  readonly paymentProvider: PaymentProvider;
  readonly eventBus: EventDispatcher;

  constructor({ paymentProvider, eventBus }: Props) {
    this.paymentProvider = paymentProvider;
    this.eventBus = eventBus;
  }

  async execute(items: {id: string, quantity: number}[]) {
    const prices = items.map(async item => {
      const priceId = await this.paymentProvider.getProductPrice(new ProductId(item.id));
      return { price: priceId, quantity: item.quantity }
    })

    const sessionItems = await Promise.all(prices);
    const session = await this.paymentProvider.createSession(sessionItems);
    return session
  }

}