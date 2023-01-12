import { Injectable } from '@angular/core';
import {JobOffer} from "../state/job-offer/job-offer";
import {HttpClient} from "@angular/common/http";
import {Directory} from "../state/directory/directory";
import {Seniority} from "../state/seniority";

@Injectable({
  providedIn: 'root'
})
export class DirectoryService {
  jobOffer = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  fetchLocalizations() {
    return this.http.get<Location>(`${this.jobOffer}/directory/localizations`);
  }
  fetchSeniorities() {
    return this.http.get<Seniority>(`${this.jobOffer}/directory/seniorities`);
  }
}
