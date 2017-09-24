import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../car';
import { CARS } from '../car-data';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  newCar = new Car();

  constructor() {
   }
  onSubmit(car: Car) {
    console.log(this.newCar);
    CARS.push(this.newCar);

  }

  ngOnInit() {
  }

}
