import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService) { }

  canActivate(): Observable<boolean> {
    // es perfil de establecimiento? : store
    return this.auth.isLogged
      .pipe(
        take(1),
        map((isLogged) => {
          if (isLogged) {
            return true;
          } else {
            this.auth.logout();
            return false;
          }
        })
      );
  }
}
