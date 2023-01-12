import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {JobOffer} from "../state/job-offer/job-offer";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  jobOffer = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  public fetchJobOffersService(){
    return this.http.get<JobOffer[]>(`${this.jobOffer}job-offers`);
  }

  public fetchJobOfferService(id: string){
    return this.http.get<JobOffer>(`${this.jobOffer}job-offers/${id}`);
  }

  public addJobOffer(data:JobOffer){
    return this.http.post<JobOffer>(`${this.jobOffer}job-offers`, data)
  }

  public updateJobOffer(data:JobOffer, id: string){
    return this.http.put<JobOffer>(`${this.jobOffer}job-offers/${id}`,data)
  }

  public deleteJobOffer(id: string){
    return this.http.delete(`${this.jobOffer}job-offers/${id}`);
  }
}
