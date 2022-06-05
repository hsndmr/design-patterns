import { Booking } from "./booking";

export class BookingDecorator implements Booking {
  protected booking: Booking;

  constructor(booking: Booking) {
    this.booking = booking;
  }
  calculatePrice(): number {
    throw new Error("Method not implemented.");
  }
  getDescription(): string {
    throw new Error("Method not implemented.");
  }
}
