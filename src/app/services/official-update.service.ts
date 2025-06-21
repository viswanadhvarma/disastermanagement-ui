import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OfficialUpdate } from '../models/official-update.model';
import { Observable } from 'rxjs';
import { APP_URL } from '../configService';

@Injectable({
  providedIn: 'root'
})
export class OfficialUpdateService {
  private apiUrl = `${APP_URL}/official-updates`;

  constructor(private http: HttpClient) { }

  getUpdatesByDisasterId(disasterId: string): Observable<OfficialUpdate[]> {
    return this.http.get<OfficialUpdate[]>(`${this.apiUrl}/${disasterId}`);
  }
}
