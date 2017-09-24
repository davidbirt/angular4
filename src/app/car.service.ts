import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './car-data'


@Injectable()
export class CarService {

  constructor() { }

  getCars(): Promise<Car[]> {
    return Promise.resolve(CARS);
  } 

  getCar(id: number): Promise<Car> {
    return this.getCars()
      .then(CARS => CARS.find(car => car.id === id))
  }

}
