export class NotFoundStateException extends Error {
  constructor() {
    super("Not found state");
  }
}
