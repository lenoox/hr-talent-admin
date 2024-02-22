import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';

import { CandidatesComponent } from './candidates.component';
import { NgxsModule, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { By } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { CandidateState } from '../../core/state/candidate/candidate.state';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavigationEnd, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GetCandidate } from '../../core/state/candidate/candidate.action';
import { candidateData } from '../../core/data/candidates';
import { PageContainerComponent } from '../../shared/components/page-container/page-container.component';

class MockRouter {
  public navigationEnd = new NavigationEnd(
    4,
    '/candidates/details/635a0835-6aa8-4e8e-8744-7b170f7b4d7f',
    '/candidates/details/635a0835-6aa8-4e8e-8744-7b170f7b4d7f'
  );
  public events = new Observable(observer => {
    observer.next(this.navigationEnd);
    observer.complete();
  });
}
describe('CandidatesComponent', async () => {
  let component: CandidatesComponent;
  let fixture: ComponentFixture<CandidatesComponent>;
  let store: Store;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CandidatesComponent, PageContainerComponent],
      imports: [
        NgxsModule.forRoot([CandidateState]),
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [{ provide: Router, useClass: MockRouter }],
    }).compileComponents();

    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(CandidatesComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isRoute to true when navigating to /candidates/detail', () => {
    store.reset({
      ...store.snapshot(),
      candidates: {
        candidate: candidateData,
      },
    });
    expect(component.isRoute).toBeTrue();
  });

  it('should display download button if resumeUrl is defined', fakeAsync(() => {
    store.reset({
      ...store.snapshot(),
      candidates: {
        candidate: candidateData,
      },
    });
    store
      .dispatch(new GetCandidate('635a0835-6aa8-4e8e-8744-7b170f7b4d7f'))
      .toPromise();
    const counter = store.selectSnapshot(state => state.candidates.candidate);
    expect(counter).toBe(candidateData);
  }));
  it('should display download button if resumeUrl is defined', () => {
    store.reset({
      ...store.snapshot(),
      candidates: {
        candidate: candidateData,
      },
    });
    store.dispatch(new GetCandidate('1')).toPromise();
    const counter = store.selectSnapshot(state => state.candidates.candidate);
    fixture.detectChanges();
    const elem = fixture.debugElement;
    const downloadButton = elem.query(By.css('.attachment-download'));
    expect(downloadButton).toBeTruthy();
    expect(downloadButton.nativeElement.getAttribute('href')).toBe(
      `${environment.apiUrl}/candidates/file/${candidateData.attachment}`
    );
  });

  it('should display "Brak załącznika" if resumeUrl is undefined', () => {
    store.reset({
      ...store.snapshot(),
      candidates: {
        candidate: {
          ...candidateData,
          attachment: null,
        },
      },
    });
    store.dispatch(new GetCandidate('1')).toPromise();
    fixture.detectChanges();
    const elem = fixture.debugElement;
    const noAttachmentText = elem
      .query(By.css('.not-found'))
      .nativeElement.textContent.trim();
    expect(noAttachmentText).toBe('Brak załącznika');
  });
});
