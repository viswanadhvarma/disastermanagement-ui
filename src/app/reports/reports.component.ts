import { Component, OnInit } from '@angular/core';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports: Report[] = [];

  constructor(private reportService: ReportService) {}

  ngOnInit(): void {
    this.fetchReports();
  }

  fetchReports(): void {
    this.reportService.getReports().subscribe((data) => {
      this.reports = data;
    });
  }
}
