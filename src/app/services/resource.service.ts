import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resource } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private apiUrl = 'http://localhost:5000/resources';

  constructor(private http: HttpClient) {}

  getResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }
}
