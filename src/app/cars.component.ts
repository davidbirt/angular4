import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';



@Component({
  selector: 'my-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  title = 'Car Show!!!';
  cars: Car[];
  selectedCar: Car;
  onSelect(car: Car): void {
    this.selectedCar = car;
  };
  getCars(): void {
    this.carService.getCars().then(cars => this.cars = cars);
  }
}




