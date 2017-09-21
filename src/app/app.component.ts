import { Component } from '@angular/core';

export class Car {
  id: number;
  make: string;
  model: string;
  notes: string;
}

const CARS: Car[] = [
  {
    id: 1,
    make: "Ford",
    model: "GT40",
    notes: ""
  },
  {
    id: 2,
    make: "Nissan",
    model: "GTR",
    notes: ""
  },
  {
    id: 3,
    make: "Porsche",
    model: "911",
    notes: ""
  },
  {
    id: 4,
    make: "Lambo",
    model: "Countach",
    notes: ""
  },
  {
    id: 5,
    make: "Landrover",
    model: "A FINISHER CAR!",
    notes: ""
  },
  {
    id: 6,
    make: "Delorean",
    model: "Time Machine",
    notes: ""
  }
]



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  // <div style="text-align:left">
  // <h1>
  //   Welcome to the {{title}}
  // </h1>
  //   Selected car: <br>
  //   <div>
  //     <label>Id: </label>{{currentCar.id}} <br>
  //   </div>
  //   <div>
  //     <label for="">Make: </label>{{currentCar.make}} <br>
  //   </div>
  //   <div>
  //     <label for="">Model:</label>{{currentCar.model}} <br>
  //   </div>
  //   <div>
  //     <label for="">Notes: </label>
  //     <input [(ngModel)]="currentCar.notes" placeholder="notes">
  //   </div>
  // </div>
  // `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Car Show!!!';
  cars = CARS;
  selectedCar: Car;
  onSelect(car: Car): void {
    this.selectedCar = car;
  }
}




