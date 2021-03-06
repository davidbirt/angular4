import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { CarsComponent } from './cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AppComponent } from './app/app.component';
import { CarService } from './car.service';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule } from './app-routing.module';
import { ManageComponent } from './manage/manage.component';

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
  },
  {
    path: 'detail/:id',
    component: CarDetailComponent
  }
]

@NgModule({
  declarations: [
    CarsComponent,
    CarDetailComponent,
    AppComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CarService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
