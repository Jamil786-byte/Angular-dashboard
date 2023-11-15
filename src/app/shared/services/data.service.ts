import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isAdminLogged: boolean = false;
  serverUrl = environment.serverUrl;
  isLoggedIn = new BehaviorSubject<boolean>(true);

  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getRequest() {
    return this.http.get(this.url).pipe(
      map((item) => {
        return item;
      })
    );
  }

  isUserLoggedIn(data: boolean) {
    this.isLoggedIn.next(data);
  }

  // Get Request
  getRequestData(url: string) {
    return this.http
      .get<any>(this.serverUrl + url)
      .pipe(map((res) => res['results']));
  }

  postRequest(url: string, body: any) {
    return this.http.post(this.serverUrl + url, body).pipe(
      map((value) => {
        return value;
      })
    );
  }

  putRequest(url: string, body: any) {
    return this.http.put(this.serverUrl + url, body);
  }

  vinPostRequest(url: string, body: any) {
    return this.http.post(url, body);
  }

  // DELETE REQUEST
  deleteRequest(url: string) {
    return this.http.delete(this.serverUrl + url);
  }

  regiserUser(url: any, body: any) {
    this.http.post(this.serverUrl + url, body);
  }

  getData(): Observable<any> {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }
}
