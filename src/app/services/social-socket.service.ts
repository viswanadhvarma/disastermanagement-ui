import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URL } from '../configService';

@Injectable({
  providedIn: 'root'
})
export class SocialSocketService {
  private socket: Socket;
  private apiUrl = `${APP_URL}/social`;

  constructor(private http: HttpClient) {
    this.socket = io(`${APP_URL}`);
  }

  sendPost(post: any) {
    return this.http.post(this.apiUrl, post);
  }

  onNewPost(): Observable<any> {
    return new Observable((observer) => {
      this.socket.on('post_broadcast', (data) => {
        observer.next(data);
      });
    });
  }
}