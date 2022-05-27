import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  private SERVER = environment.server;

  constructor(private http: HttpClient) { }

  private query(query: string, action: string, data?: any): Observable<any> {
    const url = `${this.SERVER}/api/v1/${query}`;
    if (data) {
      return this.http[action](url, data);
    } else {
      return this.http[action](url);
    }
  }

  get(path: string): Observable<any> {
    return this.query(`${path}`, 'get');
  }

  update(item, path: string): Observable<any> {
    return this.query(`${path}`, 'put', item);
  }

  patch(item, path: string): Observable<any> {
    return this.query(`${path}`, 'patch', item);
  }

  put(path: string, item?): Observable<any> {
    if (item) {
      return this.query(`${path}`, 'put', item);
    }
    return this.query(`${path}`, 'put');
  }

  delete(path: string): Observable<any> {
    return this.query(`${path}`, 'delete');
  }
  
}
