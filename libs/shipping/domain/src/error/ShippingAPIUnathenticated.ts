export class ShippingAPIUnathenticated extends Error {
  constructor() {
    super('API failed to authenticate');
  }
}
