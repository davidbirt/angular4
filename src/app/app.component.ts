import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService]
})

export class AppComponent implements OnInit {
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




