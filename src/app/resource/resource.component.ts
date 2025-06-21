import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { Resource } from '../models/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  resources: Resource[] = [];

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.fetchResources();
  }

  fetchResources(): void {
    this.resourceService.getResources().subscribe((data) => {
      this.resources = data;
    });
  }
}
