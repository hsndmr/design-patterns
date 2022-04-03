export class NotFoundNextStateException implements Error {
  message: string;
  name: string;
  stack?: string;
  
  constructor() {
    this.name = 'NotFoundNextStateException';
    this.message = 'Next state not found';
  }
}
