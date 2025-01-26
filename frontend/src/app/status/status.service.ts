import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  private apiUrl = 'http://localhost:3000/status';

  constructor(private http: HttpClient) {}

  // Method to get database and server status
  getStatus(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
