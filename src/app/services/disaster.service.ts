import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Disaster } from '../models/disaster.model';

@Injectable({
  providedIn: 'root'
})
export class DisasterService {
  private apiUrl = 'http://localhost:5000/disasters';

  constructor(private http: HttpClient) {}

  getDisasters(): Observable<Disaster[]> {
    return this.http.get<Disaster[]>(this.apiUrl);
  }
   createDisaster(disaster: Partial<Disaster>): Observable<Disaster> {
    return this.http.post<Disaster>(this.apiUrl, disaster);
  }
  updateDisaster(id: string, disaster: Partial<Disaster>): Observable<Disaster> {
  return this.http.put<Disaster>(`${this.apiUrl}/${id}`, disaster);
}

deleteDisaster(id: string): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}

}
