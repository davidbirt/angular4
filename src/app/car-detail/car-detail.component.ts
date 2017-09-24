import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Car } from '../car';
import { CarService } from '../car.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  
  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  @Input() car: Car;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.carService.getCar(+params.get('id')))
      .subscribe(car => this.car = car)
  }

  remove(): void {
    this.carService.deleteCar(this.car);
  }

  goBack(): void {
    this.location.back();
  }
  

  


  
}
