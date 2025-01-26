import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
  standalone: true,
})
export class StatusComponent implements OnInit {
  serverStatus: string = '';
  databaseStatus: string = '';
  dateTime: string = '';

  constructor(private statusService: StatusService) {}

  ngOnInit(): void {
    this.dateTime = new Date().toISOString(); 

    this.getStatus();
  }

  // Method to get server and database status
  getStatus(): void {
    this.statusService.getStatus().subscribe(
      (data) => {
        this.serverStatus = data.serverStatus;
        this.databaseStatus = data.databaseStatus;
      },
      (error) => {
        console.error('Erro ao carregar o status', error);
        this.serverStatus = 'falha';
        this.databaseStatus = 'falha';
      }
    );
  }
}
