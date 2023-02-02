import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Paginated} from "../state/paginated";
import {CandidateRequest, CandidateResponse} from "../state/candidate/candidate";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class CandidateService {
  constructor(private http: HttpClient) { }

  public fetchCandidates(pageSize:number, currentPage:number){
    let params = new HttpParams();
    params = params.append('limit', pageSize);
    params = params.append('page', currentPage+1);
    const requestOptions = { params: params };
    return this.http.get<Paginated<CandidateResponse>>(`${environment.apiUrl}/candidates`,requestOptions)
  }

  public fetchCandidate(id: string){
    return this.http.get<CandidateResponse>(`${environment.apiUrl}/candidates/${id}`);
  }
  public updateCandidate(data:CandidateRequest, id: string){
    return this.http.put<CandidateResponse>(`${environment.apiUrl}/candidates/${id}`,data)
  }
}
