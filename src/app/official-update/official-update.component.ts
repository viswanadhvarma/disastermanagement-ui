import { Component } from '@angular/core';
import { OfficialUpdate } from '../models/official-update.model';
import { OfficialUpdateService } from '../services/official-update.service';

@Component({
  selector: 'app-official-update',
  templateUrl: './official-update.component.html',
  styleUrls: ['./official-update.component.css']
})
export class OfficialUpdateComponent {
  disasterId: string = '';
  updates: OfficialUpdate[] = [];
  loading = false;
  errorMessage: string = '';

  constructor(private updateService: OfficialUpdateService) {}

  fetchUpdates(): void {
    if (!this.disasterId.trim()) {
      this.errorMessage = 'Please enter a disaster ID';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.updateService.getUpdatesByDisasterId(this.disasterId.trim()).subscribe({
      next: (data) => {
        this.updates = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Error fetching updates.';
        this.loading = false;
      }
    });
  }
}