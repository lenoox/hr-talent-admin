import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CandidateState } from '../../../../core/state/candidate/candidate.state';
import { CandidateResponse } from '../../../../core/state/candidate/candidate';
import {
  GetCandidate,
  UpdateCandidate,
} from '../../../../core/state/candidate/candidate.action';
import { DirectoryState } from '../../../../core/state/directory/directory.state';
import { candidateFormToReqest } from '../../../../shared/mappers/candidates-mapper';
import { FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from '../../../../core/services/notification.service';
import { StatusDirectory } from '../../../../core/model/status';
import { compareWithId } from '../../../../core/utils/compare.utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss'],
})
export class CandidateDetailsComponent implements OnInit {
  @Select(DirectoryState.getStatuses) statuses$: Observable<StatusDirectory[]>;
  @Select(CandidateState.getCandidate)
  candidate$: Observable<CandidateResponse>;
  candidateForm: any;
  candidateId: any;
  resumeUrl: string | undefined;
  columnHeader = {
    nr: 'Nr',
    position: 'Tytuł oferty',
    seniorities: 'Poziom doświadczenia',
    locations: 'Lokalizaja',
    actions: 'Akcja',
  };
  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.candidateForm = this.getForm();
    this.route?.params
      .pipe(
        untilDestroyed(this),
        switchMap((params: Params) => {
          this.candidateId = params['id'];
          return this.store.dispatch(new GetCandidate(this.candidateId));
        }),
        switchMap(() => {
          return this.candidate$;
        })
      )
      .subscribe((candidateResponse: CandidateResponse) => {
        this.candidateForm = this.getForm(candidateResponse);
      });
    this.candidateId = this.route.snapshot.params['id'];
  }

  get status() {
    return this.candidateForm.get('status');
  }

  compareCandidate(firstObject: any, secondObject: any): boolean {
    return compareWithId(firstObject, secondObject);
  }
  getForm(data: CandidateResponse | null = null) {
    return this._formBuilder.group({
      status: [data?.status ? data?.status : null, Validators.required],
    });
  }
  onSubmit(data: CandidateResponse) {
    const candidate = candidateFormToReqest(data);
    this.store.dispatch(new UpdateCandidate(candidate, this.candidateId));
    this.notificationService.notify('Zaktualizowano kandydata');
    this.router.navigate(['/candidates']);
  }
}
