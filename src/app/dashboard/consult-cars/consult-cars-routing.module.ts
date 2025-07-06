import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultCarsComponent } from './consult-cars.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultCarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultCarsRoutingModule {}
