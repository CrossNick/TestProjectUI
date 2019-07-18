import { Injectable } from '@angular/core';
import { HttpClientModule,  HttpClient, HttpHeaders  }    from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  getMessagesUrl: string = 'http://localhost/message-web/api/message/GetMessages';
  changeStatustUrl: string = 'http://localhost/message-web/api/message/ChangeStatus';
  deleteMessageUrl: string = 'http://localhost/message-web/api/message/DeleteMessage';

  constructor(private http: HttpClient) { }

  getMessages (): Observable<Message[]> {
    return this.http.get<Message[]>(this.getMessagesUrl);
  }

  changeStatus (message: Message): Observable<any> {
    return this.http.post(this.changeStatustUrl, message);
  }

  deleteMessage (Id: number): Observable<any> {
    return this.http.post(this.deleteMessageUrl, Id);
  }

}
