import { Injectable } from '@angular/core';
import { HttpClientModule,  HttpClient, HttpHeaders  }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  getRequestUrl: string = 'http://localhost/message-web/api/request/GetRequest';
  saveRequestUrl: string = 'http://localhost/message-web/api/request/SaveRequest';

  constructor(private http: HttpClient) { }

  getRequest (id: number): Observable<Request[]> {
    const url = `${this.getRequestUrl}?id=${id}`;
    return this.http.get<Request[]>(url);
  }

  saveRequest (request: Request): Observable<any> {
    return this.http.post(this.getRequestUrl, request);
  }

}
