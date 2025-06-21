import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfficialUpdate } from '../models/official-update.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficialUpdateService{
  private apiUrl = 'http://localhost:5000/official-updates';

  constructor(private http: HttpClient) {}

  getUpdatesByDisasterId(disasterId: string): Observable<OfficialUpdate[]> {
    return this.http.get<OfficialUpdate[]>(`${this.apiUrl}/${disasterId}`);
  }
}
