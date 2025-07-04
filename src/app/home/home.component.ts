import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  showWelcomeModal = false;
  showPageContentBlur = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.showWelcomeModal = true;
    this.showPageContentBlur = true; // Activate blur when modal shows
  }

  onModalClosed() {
    console.log('Welcome modal was closed manually.');
    this.showPageContentBlur = false;
  }

  onDashboardClicked() {
    console.log('Navigating to Dashboard...');
    this.showPageContentBlur = false;
    this.router.navigate(['/dashboard']);
  }

  onLogoutClicked() {
    console.log('Logging out...');
    this.showPageContentBlur = false;
    this.router.navigate(['/login']);
  }
}
