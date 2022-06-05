import { BookingDecorator } from "./booking.decorator";

export class ExtraBed extends BookingDecorator {
  calculatePrice(): number {
    return this.booking.calculatePrice() + 20;
  }

  getDescription(): string {
    return this.booking.getDescription() + ", extra bed";
  }
}
