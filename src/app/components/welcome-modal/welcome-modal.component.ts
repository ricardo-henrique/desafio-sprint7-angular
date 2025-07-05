import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  standalone: false,
  templateUrl: './welcome-modal.component.html',
  styleUrl: './welcome-modal.component.css',
})
export class WelcomeModalComponent {
  name = '';

  @Input() show = false;
  @Output() close = new EventEmitter<void>();
  @Output() dashboardClick = new EventEmitter<void>();
  @Output() logoutClick = new EventEmitter<void>();

  onClose() {
    this.show = false;
    this.close.emit();
  }

  onDashboardClick() {
    this.onClose();
    this.dashboardClick.emit();
  }

  onLogoutClick() {
    this.onClose();
    this.logoutClick.emit();
  }
}
