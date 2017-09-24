import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CarsComponent } from './cars.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AppComponent } from './app/app.component';
import { CarService } from './car.service';
import { DashboardComponent } from './dashboard/dashboard.component';
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
  },
  {
      path: 'manage',
      component: ManageComponent
  }
]

@NgModule({
    imports: [
      RouterModule.forRoot(
        applicationRoutes
      )
    ],
    exports: [ RouterModule ]
  })

export class AppRoutingModule {}