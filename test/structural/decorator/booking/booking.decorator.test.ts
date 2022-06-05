import { DoubleRoomBooking } from "../../../../src/structural/decorator/booking/double.room.booking";
import { Wifi } from "../../../../src/structural/decorator/booking/wifi";
import { ExtraBed } from "../../../../src/structural/decorator/booking/extra.bed";
test("it can calculate price for double room booking", () => {
  const booking = new DoubleRoomBooking();
  expect(booking.calculatePrice()).toBe(100);
  expect(booking.getDescription()).toBe("Double room booking");
});

test("it can calculate price for double room booking with wifi", () => {
  const booking = new DoubleRoomBooking();
  const wifi = new Wifi(booking);
  expect(wifi.calculatePrice()).toBe(110);
  expect(wifi.getDescription()).toBe("Double room booking, wifi");
});

test("it can calculate price for double room booking with wifi and extra bed", () => {
  const booking = new DoubleRoomBooking();
  const wifi = new Wifi(booking);
  const extraBed = new ExtraBed(wifi);
  expect(extraBed.calculatePrice()).toBe(130);
  expect(extraBed.getDescription()).toBe(
    "Double room booking, wifi, extra bed"
  );
});
