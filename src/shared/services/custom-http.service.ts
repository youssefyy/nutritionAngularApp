import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PORTS } from 'src/environments/environment.prod';

@Injectable()

export class CustomHttpService {

  currentUser;

  constructor(
    private http: HttpClient
  ) { }

  postHttp(url, data) {
    url = `${PORTS.DEV}${url}`;
    console.log('data in post request: ', data,);
    return this.http.post(url, data);
  }

}
