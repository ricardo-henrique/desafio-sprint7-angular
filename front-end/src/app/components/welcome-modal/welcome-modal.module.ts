import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeModalComponent } from './welcome-modal.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [WelcomeModalComponent],
  imports: [CommonModule, RouterOutlet],
  exports: [WelcomeModalComponent],
})
export class WelcomeModalModule {}
