import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeniorityDirectory } from '../model/seniority';
import { environment } from '../../../environments/environment';
import { LocationDirectory } from '../model/location';
import { StatusDirectory } from '../model/status';

@Injectable({
  providedIn: 'root',
})
export class DirectoryService {
  constructor(private http: HttpClient) {}

  fetchLocations() {
    return this.http.get<LocationDirectory[]>(
      `${environment.apiUrl}/public/directories/locations`
    );
  }
  fetchSeniorities() {
    return this.http.get<SeniorityDirectory[]>(
      `${environment.apiUrl}/public/directories/seniorities`
    );
  }
  fetchStatuses() {
    return this.http.get<StatusDirectory[]>(
      `${environment.apiUrl}/directories/statuses`
    );
  }
}
