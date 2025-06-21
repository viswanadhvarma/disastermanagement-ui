import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../models/resource.model';
import { APP_URL } from '../configService';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = `${APP_URL}/resources`;

  constructor(private http: HttpClient) { }

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }
}
