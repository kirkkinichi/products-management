import { Component, OnInit } from '@angular/core';
import { Log, LogService } from '../log.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-log-list',
  imports:[FormsModule, NgFor],
  templateUrl: './log-list.component.html',
  styleUrls: ['./log-list.component.css']
})
export class LogListComponent implements OnInit {
  logs: Log[] = [];
  currentPage: number = 1;
  totalLogs: number = 0;
  logsPerPage: number = 50;
  entidade: string = '';

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.loadLogs();
  }

  loadLogs(): void {
    this.logService.getLogs(this.entidade, this.currentPage, this.logsPerPage).subscribe(
      (logs: Log[]) => {
        this.logs = logs;
        this.totalLogs = logs.length;
      },
      (error) => {
        console.error('Erro ao carregar os logs', error);
      }
    );
  }

  // Navigation
  nextPage(): void {
    this.currentPage++;
    this.loadLogs();
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadLogs();
    }
  }

  // Method to filter by entity
  filterByEntity(): void {
    this.currentPage = 1;
    this.loadLogs();
  }
}
