//User Stories: frappe-89
import { asClass, asFunction, AwilixContainer } from 'awilix';
import { StripePaymentProvider } from '@frappe/payment/persistance/stripe'
import { paymentRouting } from './payment.routing';
import { PaymentSessionCreator } from '@frappe/payment/application';
export const registerPaymentModule = (container: AwilixContainer) => {
  container.register({
    paymentProvider: asClass(StripePaymentProvider).singleton(),
    paymentSessionCreator: asClass(PaymentSessionCreator).singleton(),
    paymentRouting: asFunction(paymentRouting).singleton()
  });
};
