export interface MailPrimitives {
  readonly id: string,
  readonly to: string,
  readonly data: Record<string, unknown>,
}
