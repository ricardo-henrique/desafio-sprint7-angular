import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroArrowLeftStartOnRectangle,
  heroMagnifyingGlass,
  heroDocumentCheck,
} from '@ng-icons/heroicons/outline';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterOutlet,
    NgIconsModule.withIcons({
      heroArrowLeftStartOnRectangle,
      heroMagnifyingGlass,
      heroDocumentCheck,
    }),
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
