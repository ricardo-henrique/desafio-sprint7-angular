import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserTokenService {
  private key = 'token';
  constructor() {}

  saveToken(token: string) {
    localStorage.setItem(this.key, token);
  }
}
