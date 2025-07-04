import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WelcomeModalModule } from '../component/welcome-modal/welcome-modal.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, WelcomeModalModule],
  exports: [HomeComponent],
})
export class HomeModule {}
