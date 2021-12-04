import { Product, ProductId } from '@frappe/product/domain'
import Stripe from "stripe"
export interface PaymentProvider {
  createSession(items: {price: string, quantity: number}[]): Promise<Stripe.Response<Stripe.Checkout.Session>>
  createProduct(product: Product): Promise<void>
  archivePrice(productId: ProductId): Promise<void>
  createPrice(id: string, price: number): Promise<void>
  getProductPrice(productId: ProductId): Promise<string>
}