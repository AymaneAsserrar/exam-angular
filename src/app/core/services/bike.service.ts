import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike.model';

@Injectable({
  providedIn: 'root'
})
export class BikeService {
  private apiUrl = 'assets/data/bikes.json';

  constructor(private http: HttpClient) { }

  getBikes(): Observable<Bike[]> {
    return this.http.get<Bike[]>(this.apiUrl);
  }
}