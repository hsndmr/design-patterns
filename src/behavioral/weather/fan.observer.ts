import { IObserver } from './observer.interface';
import { ISubject } from './subject.interface';

export class Fan implements IObserver {
  public isFanWorking: boolean = false;

  constructor(weatherStation: ISubject) {
    weatherStation.addObserver(this);
  }

  update(temperature: number): void {
    this.isFanWorking = temperature > 25;
  }
}