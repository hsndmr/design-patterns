import { Booking } from "./booking";

export class DoubleRoomBooking implements Booking {
  calculatePrice(): number {
    return 100;
  }

  getDescription(): string {
    return "Double room booking";
  }
}
