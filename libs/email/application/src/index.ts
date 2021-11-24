export * from './send';

export const EmailTemplates = {
    Generic: process.env.SENDGRID_GENERIC_TEMPLATE_ID,
    UpdateOrderStatus: process.env.SENDGRID_UPDATE_ORDER_STATUS_TEMPLATE_ID,
    ResetPassword: process.env.SENDGRID_RESET_PASSWORD_TEMPLATE_ID
}
