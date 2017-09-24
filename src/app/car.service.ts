import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './car-data'


@Injectable()
export class CarService {

  constructor() {
   }

  getCars(): Promise<Car[]> {
    return Promise.resolve(CARS);
  } 

  getCar(id: number): Promise<Car> {
    return this.getCars()
      .then(CARS => CARS.find(car => car.id === id))
  }

  deleteCar(car: Car): void {
    var i = CARS.indexOf(CARS.find(c => c.id === car.id));
    if(i > -1) {
      CARS.splice(i, 1);
    }
  }

  addCar(car: Car): void {
    CARS.push(car);
  }

}
