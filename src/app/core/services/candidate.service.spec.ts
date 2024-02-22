import { TestBed } from '@angular/core/testing';

import { CandidateService } from './candidate.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { candidatesData } from '../data/candidates';

describe('CandidateService', () => {
  let service: CandidateService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(CandidateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch candidates with correct parameters', () => {
    const pageSize = 5;
    const currentPage = 0;

    service.fetchCandidates(pageSize, currentPage).subscribe(response => {
      expect(response).toEqual(candidatesData);
    });

    const mockUrl = `${environment.apiUrl}/candidates`;
    const mockParams = new HttpParams()
      .append('limit', String(pageSize))
      .append('page', String(currentPage + 1));

    const mockRequest = httpTestingController.expectOne(req => {
      return (
        req.url === mockUrl && req.params.toString() === mockParams.toString()
      );
    });

    expect(mockRequest.request.method).toEqual('GET');
    mockRequest.flush(candidatesData);
  });
});
