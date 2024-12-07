import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private apiUrl = 'http://localhost:8080/api/trips'; // Assurez-vous que cela correspond à l'URL de votre backend

  constructor(private http: HttpClient) { }

  searchTrips(departure: string, destination: string, date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search`, { params: { departure, destination, date } });
  }

  getPopularRoutes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/popular`);
  }
}

