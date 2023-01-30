import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {JobOfferRequest, JobOfferResponse, Paginated} from "../state/job-offer/job-offer";

@Injectable({
  providedIn: 'root'
})
export class JobOfferService {
  jobOffer = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  public fetchJobOffersService(pageSize:number, currentPage:number){
    let params = new HttpParams();
    params = params.append('limit', pageSize);
    params = params.append('page', currentPage+1);
    const requestOptions = { params: params };

    return this.http.get<Paginated<JobOfferResponse>>(`${this.jobOffer}job-offers`,requestOptions)
  }

  public fetchJobOfferService(id: string){
    return this.http.get<JobOfferResponse>(`${this.jobOffer}job-offers/${id}`);
  }

  public addJobOffer(data:JobOfferRequest){
    return this.http.post<JobOfferResponse>(`${this.jobOffer}job-offers`, data)
  }

  public updateJobOffer(data:JobOfferRequest, id: string){
    return this.http.put<JobOfferResponse>(`${this.jobOffer}job-offers/${id}`,data)
  }

  public deleteJobOffer(id: string){
    return this.http.delete(`${this.jobOffer}job-offers/${id}`);
  }
}
