import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seniority } from '../state/seniority';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  constructor(private http: HttpClient) {}

  fetchLocations() {
    return this.http.get<Location>(
      `${environment.apiUrl}/directories/locations`
    );
  }
  fetchSeniorities() {
    return this.http.get<Seniority>(
      `${environment.apiUrl}/directories/seniorities`
    );
  }
  fetchStatuses() {
    return this.http.get<Seniority>(
      `${environment.apiUrl}/directories/statuses`
    );
  }
}
