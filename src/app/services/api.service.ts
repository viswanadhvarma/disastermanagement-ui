import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private BASE_URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  // Disasters
  getDisasters(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/disasters`);
  }

  createDisaster(disaster: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/disasters`, disaster);
  }

  // Resources
  getResources(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/resources`);
  }

  createResource(resource: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/resources`, resource);
  }

  updateResource(id: string, resource: any): Observable<any> {
    return this.http.put(`${this.BASE_URL}/resources/${id}`, resource);
  }

  deleteResource(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/resources/${id}`);
  }

  // Reports
  getReports(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/reports`);
  }

  createReport(report: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/reports`, report);
  }

  // Cache
  getCacheByKey(key: string): Observable<any> {
    return this.http.get(`${this.BASE_URL}/cache/${key}`);
  }

  setCache(key: string, value: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/cache`, { key, value });
  }

  // Official Updates
  getOfficialUpdates(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/official-updates`);
  }

  createOfficialUpdate(update: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/official-updates`, update);
  }

  // Social Media
  getSocialPosts(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/social`);
  }

  postSocialUpdate(post: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/social`, post);
  }

  verifySocialPost(id: string, status: string): Observable<any> {
    return this.http.put(`${this.BASE_URL}/social/${id}`, { status });
  }

  // Geocode
  geocodeLocation(location: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/geocode`, { location });
  }

  // Extract Location from Text (Gemini)
  extractLocationFromText(text: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/extract-location`, { text });
  }

  // Verify image using Gemini
  verifyImage(url: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/disasters/verify`, { image_url: url });
  }

  // Scraping external updates
  getScrapedUpdates(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/scrape`);
  }
}
