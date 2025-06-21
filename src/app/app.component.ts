import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  center: google.maps.LatLngLiteral = { lat: 17.3850, lng: 78.4867 }; // Default center
  markers: google.maps.LatLngLiteral[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('http://localhost:5000/disasters').subscribe(data => {
      if (data && data.length > 0) {
        // Adjust center to first resource
        this.center = {
          lat: parseFloat(data[0].location.coordinates[1]),
          lng: parseFloat(data[0].location.coordinates[0])
        };

        // Create markers array
        this.markers = data.map(r => ({
          lat: parseFloat(r.location.coordinates[1]),
          lng: parseFloat(r.location.coordinates[0])
        }));
      }
    });
  }
}