export { SendEmailOnUserRegistered } from './send/email-confirmation/SendEmailOnUserRegistered';
export { SendEmailOnOrderUpdateStatus } from './send/email-update-order-status/SendEmailOnOrderUpdateStatus';
export { SendEmailOnOrderGenerated } from './send/email-generate-order/SendEmailOnOrderGenerated';
export * from './send';

export const EmailTemplates = {
    Generic: process.env.SENDGRID_GENERIC_TEMPLATE_ID,
    UpdateOrderStatus: process.env.SENDGRID_UPDATE_ORDER_STATUS_TEMPLATE_ID,
    ResetPassword: process.env.SENDGRID_RESET_PASSWORD_TEMPLATE_ID,
    NewOrder: process.env.SENDGRID_NEW_ORDER_TEMPLATE_ID
}
