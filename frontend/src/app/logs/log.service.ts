import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Log {
  id: number;
  entidade: string;
  entidade_id: number;
  dtinc: string;
}

@Injectable({
  providedIn: 'root',
})
export class LogService {
  private apiUrl = 'http://localhost:3000/log';

  constructor(private http: HttpClient) {}

  // Method to get logs with pagination
  getLogs(entidade: string, pagina: number = 1, limite: number = 50): Observable<Log[]> {
    let params = new HttpParams()
      .set('entidade', entidade)
      .set('pagina', pagina.toString());

    return this.http.get<Log[]>(this.apiUrl, { params });
  }
}
