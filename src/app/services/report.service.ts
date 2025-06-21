import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APP_URL } from '../configService';

@Injectable({
  providedIn: 'root'
})
export class ReportService {


  private apiUrl = `${APP_URL}/reports`;

  constructor(private http: HttpClient) { }

  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this.apiUrl);
  }
}
