import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Disaster } from '../models/disaster.model';
import { DisasterService } from '../services/disaster.service';

@Component({
  selector: 'app-disasterlist',
  templateUrl: './disasterlist.component.html',
  styleUrls: ['./disasterlist.component.css']
})
export class DisasterlistComponent implements OnInit {
  disasters: Disaster[] = [];
  formDisaster: Partial<Disaster> = {
    title: '',
    location_name: '',
    description: ''
  };
  isEditing = false;
  editingId: string | null = null;

  constructor(private disasterService: DisasterService) {}

  ngOnInit(): void {
    this.loadDisasters();
  }

  loadDisasters(): void {
    this.disasterService.getDisasters().subscribe((data) => {
      this.disasters = data;
    });
  }

  createDisaster(): void {
    this.disasterService.createDisaster(this.formDisaster).subscribe((created) => {
      this.disasters.unshift(created);
      this.formDisaster = { title: '', location_name: '', description: '' };
    });
  }

  editDisaster(disaster: Disaster): void {
    this.isEditing = true;
    this.editingId = disaster.id;
    this.formDisaster = { ...disaster }; // populate form
  }

  cancelEdit(): void {
    this.isEditing = false;
    this.editingId = null;
    this.formDisaster = { title: '', location_name: '', description: '' };
  }

  updateDisaster(): void {
    if (!this.editingId) return;

    this.disasterService.updateDisaster(this.editingId, this.formDisaster).subscribe((updated) => {
      const index = this.disasters.findIndex((d) => d.id === this.editingId);
      if (index !== -1) {
        this.disasters[index] = updated;
      }
      this.cancelEdit();
    });
  }

  deleteDisaster(id: string): void {
    if (confirm('Are you sure you want to delete this disaster?')) {
      this.disasterService.deleteDisaster(id).subscribe(() => {
        this.disasters = this.disasters.filter((d) => d.id !== id);
      });
    }
  }
}
