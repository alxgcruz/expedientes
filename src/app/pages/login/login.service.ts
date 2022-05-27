import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class LoginService implements Resolve<any> {

  constructor(private auth: AuthService) { }

  resolve(): Promise<string> {
    return new Promise<string>((resolve) => {
      if (this.auth.user && this.auth.user.profile) {
        resolve('/tabs/account');
      } else {
        resolve('/');
      }
    })
  }
}
