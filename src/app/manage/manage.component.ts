import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../car';
import { CARS } from '../car-data';
import { CarService } from '../car.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  newCar = new Car();

  constructor(private carService: CarService) {}

  onSubmit(car: Car) {
    console.log(this.newCar);
    this.carService.addCar(this.newCar);
  }

  ngOnInit() {
  }

}
