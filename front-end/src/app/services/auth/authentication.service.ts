import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserTokenService } from '../token/user-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient, private userToken: UserTokenService) {}

  login(nome: string, senha: string): Observable<HttpResponse<any>> {
    return this.http
      .post(
        'http://localhost:3001/login',
        {
          nome: nome,
          senha: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((res) => {
          const authToken = res.headers.get('x-access-token') ?? '';
          this.userToken.saveToken(authToken);
        })
      );
  }
}
