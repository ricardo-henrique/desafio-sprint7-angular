import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'consultar-carros',
        loadChildren: () =>
          import('./consult-cars/consult-cars.module').then(
            (m) => m.ConsultCarsModule
          ),
      },
      {
        path: 'teste-drive',
        loadChildren: () =>
          import('./test-drive/test-drive.module').then(
            (m) => m.TestDriveModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
