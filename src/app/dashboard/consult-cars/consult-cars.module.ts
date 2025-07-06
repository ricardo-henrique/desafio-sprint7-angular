import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultCarsRoutingModule } from './consult-cars-routing.module';
import { ConsultCarsComponent } from './consult-cars.component';


@NgModule({
  declarations: [
    ConsultCarsComponent
  ],
  imports: [
    CommonModule,
    ConsultCarsRoutingModule
  ]
})
export class ConsultCarsModule { }
