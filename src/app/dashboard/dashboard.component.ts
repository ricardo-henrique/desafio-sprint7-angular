import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isSidebarExpanded: boolean = false;

  private resizeListener: () => void;

  constructor(private router: Router) {
    this.resizeListener = this.checkScreenSize.bind(this);
  }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.resizeListener);
  }

  toggleSidebar(): void {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  private checkScreenSize(): void {
    const newExpandedState = window.innerWidth >= 768; // Ou o breakpoint que você definir
    if (this.isSidebarExpanded !== newExpandedState) {
      this.isSidebarExpanded = newExpandedState;
    }
  }

  toLoginPage(): void {
    this.router.navigate(['/login']);
  }
}
