import { TestBed } from '@angular/core/testing';

import { JobOfferService } from './job-offer.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { jobOfferData } from '../data/job-offer';

describe('JobOfferService', () => {
  let service: JobOfferService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JobOfferService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch job offers with correct parameters', () => {
    const pageSize = 5;
    const currentPage = 0;

    service.fetchJobOffers(pageSize, currentPage).subscribe(response => {
      expect(response).toEqual(jobOfferData);
    });

    const mockUrl = `${environment.apiUrl}/public/job-offers`;
    const mockParams = new HttpParams()
      .append('limit', String(pageSize))
      .append('page', String(currentPage + 1));

    const mockRequest = httpTestingController.expectOne(req => {
      return (
        req.url === mockUrl && req.params.toString() === mockParams.toString()
      );
    });

    expect(mockRequest.request.method).toEqual('GET');
    mockRequest.flush(jobOfferData);
  });
});
