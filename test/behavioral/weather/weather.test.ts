import { Fan } from '../../../src/behavioral/weather/fan.observer';
import { WeatherStation } from '../../../src/behavioral/weather/wheather-station.subject';

test('fan should work', () => {
  const weatherStation = new WeatherStation(10);
  const fan = new Fan(weatherStation);
  
  weatherStation.setTemperature(30);

  expect(fan.isFanWorking).toBe(true);
});