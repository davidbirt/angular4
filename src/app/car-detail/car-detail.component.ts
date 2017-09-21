import { Component, Input } from '@angular/core';
import { Car } from '../car';



@Component({
  selector: 'car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {
  @Input() car: Car;
}
