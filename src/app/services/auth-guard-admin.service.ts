import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService {

 /* constructor(public auth: AuthService) { }

  canActivate() {
    return this.auth.LoggedIn;
  }*/

}
