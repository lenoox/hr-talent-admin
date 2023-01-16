import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Seniority} from "../state/seniority";

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  jobOffer = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  fetchLocations() {
    return this.http.get<Location>(`${this.jobOffer}directories/locations`);
  }
  fetchSeniorities() {
    return this.http.get<Seniority>(`${this.jobOffer}directories/seniorities`);
  }
}
