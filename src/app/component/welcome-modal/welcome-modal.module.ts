import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeModalComponent } from './welcome-modal.component';

@NgModule({
  declarations: [WelcomeModalComponent],
  imports: [CommonModule],
  exports: [WelcomeModalComponent],
})
export class WelcomeModalModule {}
