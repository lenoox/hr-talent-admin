import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { CandidateState } from '../../core/state/candidate/candidate.state';
import { Observable } from 'rxjs';
import { CandidateResponse } from '../../core/state/candidate/candidate';
import { NavigationEnd, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  @Select(CandidateState.getCandidate)
  candidate$: Observable<CandidateResponse>;
  public isRoute: boolean;
  public resumeUrl: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(untilDestroyed(this)).subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.isRoute = val.url.indexOf('/candidates/detail') == 0;
      }
    });
    this.candidate$.pipe(untilDestroyed(this)).subscribe(candidateResponse => {
      const pathFile = `${environment.apiUrl}/candidates/file/${candidateResponse?.attachment}`;
      this.resumeUrl = candidateResponse?.attachment ? pathFile : undefined;
    });
  }
}
