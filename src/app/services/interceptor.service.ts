import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private auth: AuthService,
    private router: Router,
    private toast: ToastService
    ) { }

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let request = req;

    // inyectar el token jwt en los headers de las solicitudes...
    if (this.auth.token) {
      request = req.clone({
        setHeaders: {
          authorization: 'Bearer ' + this.auth.token,
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // console.error('Error interceptor:', error);
        // if (error.status === 401 && error.error === 'Sesión jwt no válida.') {
        if (error.status === 400) {
          if (this.router.url !== '/login') {
            this.toast.presentToast(error.error.message, 'danger');
            this.auth.logout();
          }
        }
        return throwError(error);
      })
    );
  }
}

