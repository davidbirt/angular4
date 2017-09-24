import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CarsComponent } from './cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AppComponent } from './app/app.component';
import { CarService } from './car.service';
import { DashboardComponent } from './dashboard/dashboard.component';

const applicationRoutes = [
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    CarsComponent,
    CarDetailComponent,
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      applicationRoutes
    )
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
