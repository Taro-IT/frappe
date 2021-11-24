import {PaymentProvider} from '@frappe/payment/domain'
import { Product, ProductId } from '@frappe/product/domain'
import Stripe from 'stripe'
export class StripePaymentProvider implements PaymentProvider {
  private readonly stripeClient: Stripe
  private readonly apiVersion = "2020-08-27"
  
  constructor() {
    this.stripeClient = new Stripe(process.env.STRIPE_API_KEY, { apiVersion: this.apiVersion })
  }

  async createProduct(product: Product) {
    await this.stripeClient.products.create({
      id: product.id.value,
      name: product.name.value,
      active: product.isActive.value,
      description: product.description.value
    })
  }

  async createPrice(id: string, price: number): Promise<void> {
    await this.stripeClient.prices.create({
      currency: "mxn",
      product: id,
      unit_amount: price * 100
    })
  }

  async createSession(items: {price: string, quantity: number}[]): Promise<Stripe.Response<Stripe.Checkout.Session>>  {

    console.log(items);
    const session = await this.stripeClient.checkout.sessions.create({
      success_url: "http://localhost:4200/",
      cancel_url: "http://localhost:4200/cart",
      line_items: items,
      mode: "payment"
    });
    
    return session;
  }

  async getProductPrice(productId: ProductId): Promise<string> {
    const productPrices = (await this.stripeClient.prices.list({product: productId.value, active: true})).data

    return productPrices[0].id;
  }
}