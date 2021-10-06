export class InvalidOrderStatus extends Error {
  constructor(name: string) {
    super(`The order status with value '${name}' does not exist.`);
  }
}