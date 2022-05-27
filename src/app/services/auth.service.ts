import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private SERVER = environment.server;
  token = '';
  user: any;
  private loggedIn = new BehaviorSubject<boolean>(false);
  
  constructor(
    private http: HttpClient,
    private router: Router,
    ) {
    this.cargarToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  private cargarToken(): void {
    this.token = localStorage.getItem('token') || null;
    const user = localStorage.getItem('user');
    if (user) {
      this.user = JSON.parse(user) || null;
    }
  }

  login(usuario: { email: string, password: string, sessionDuplicate: boolean }): Observable<any> {
    return this.query('auth/login', 'post', usuario).pipe(
      // atrapar la respuesta y almacenar el jwt en localstorage
      map((resp: any) => {
        this.token = resp.access_token;
        this.user = resp.identity;
        this.guardarUsuario(resp.access_token, resp.identity);
        resp.path = './items-list';
        return resp;
      })
    );
  }

  logout(): void {
    this.token = '';
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.router.navigate(['./login']);
  }

  guardarUsuario(token: string, user: any): void {
    this.token = token;
    this.user = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.next(true);
  }

  query(query: string, action: string, data?: any): Observable<any> {
    const url = `${this.SERVER}/api/v1/${query}`;
    if (data) {
      return this.http[action](url, data);
    } else {
      return this.http[action](url);
    }
  }
}
