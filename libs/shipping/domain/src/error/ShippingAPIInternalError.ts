export class ShippingAPIInternalError extends Error {
  constructor() {
    super('Interal shipping API failed');
  }
}
