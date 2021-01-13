import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iuser} from '../iuser';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url_API = 'http://localhost:8080/register';
  constructor(private http: HttpClient) { }

  create(user: Iuser): Observable<any> {
    return this.http.post<Iuser>(this.url_API, user);
  }
}
