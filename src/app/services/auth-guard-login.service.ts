import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardLoginService {

  constructor(public auth : AuthService) { }
  canActivate() {
    return this.auth.loggedIn;
  }

}
