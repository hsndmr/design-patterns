import { IObserver } from './observer.interface';
import { ISubject } from './subject.interface';

export class WeatherStation implements ISubject {

  private observers: IObserver[] = [];
  
  constructor(private temperature: number) {
  }

  addObserver(observer: IObserver): void {
    this.observers.push(observer);
  }
  removeObserver(observer: IObserver): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  notify(): void {
    this.observers.forEach(observer => observer.update(this.temperature));
  }

  setTemperature(temperature: number ): void {
    this.temperature = temperature;
    this.notify();
  }
}