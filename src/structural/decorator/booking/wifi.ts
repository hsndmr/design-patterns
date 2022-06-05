import { BookingDecorator } from "./booking.decorator";

export class Wifi extends BookingDecorator {
  calculatePrice(): number {
    return this.booking.calculatePrice() + 10;
  }

  getDescription(): string {
    return this.booking.getDescription() + ", wifi";
  }
}
