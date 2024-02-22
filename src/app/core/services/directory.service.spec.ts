import { TestBed } from '@angular/core/testing';
import { DirectoryService } from './directory.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  locationsData,
  senioritiesData,
  statusesData,
} from '../data/directory';
import { environment } from '../../../environments/environment';

describe('DirectoryService', () => {
  let service: DirectoryService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DirectoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should fetch locations', () => {
    service.fetchLocations().subscribe(locations => {
      expect(locations).toEqual(locationsData);
    });
    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/public/directories/locations`
    );
    expect(req.request.method).toBe('GET');
    req.flush(locationsData);
  });

  it('should fetch seniorities', () => {
    service.fetchSeniorities().subscribe(seniorities => {
      expect(seniorities).toEqual(senioritiesData);
    });
    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/public/directories/seniorities`
    );
    expect(req.request.method).toBe('GET');
    req.flush(senioritiesData);
  });

  it('should fetch statuses', () => {
    service.fetchStatuses().subscribe(statuses => {
      expect(statuses).toEqual(statusesData);
    });
    const req = httpTestingController.expectOne(
      `${environment.apiUrl}/directories/statuses`
    );
    expect(req.request.method).toBe('GET');
    req.flush(statusesData);
  });
});
