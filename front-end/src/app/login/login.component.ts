import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  nome = '';
  senha = '';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  onSubmit() {
    this.authService.login(this.nome, this.senha).subscribe({
      complete: () => this.router.navigate(['/home']),
      error: (err) => {
        alert('nome ou senha incrretos');
        console.error(err);
      },
    });
  }
}
