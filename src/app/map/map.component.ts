import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 16.5062, lng: 80.6480 }; // Default: Vijayawada
  markers: google.maps.LatLngLiteral[] = [
    { lat: 16.5062, lng: 80.6480 }
  ];
}
