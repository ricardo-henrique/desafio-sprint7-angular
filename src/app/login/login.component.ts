import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  nome = 'admin';
  senha = '123456';

  constructor(private router: Router) {}

  onSubmit() {
    this.router.navigate(['home']);
  }
}
