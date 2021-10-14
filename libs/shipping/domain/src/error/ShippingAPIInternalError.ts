export class ShippingAPIInternalError extends Error {
  constructor() {
    super('Internal shipping API failed');
  }
}
