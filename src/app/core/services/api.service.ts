import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseUrl = '/api';

  constructor(public http: HttpClient) {}

  getHackers(search: string = '') {
    return this.http
      .get(`${this.baseUrl}/hackers?q=${search}`);
  }

  getHackerDetails(id: string) {
    return this.http
      .get(`${this.baseUrl}/hackers?id=${id}`);
  }
}
