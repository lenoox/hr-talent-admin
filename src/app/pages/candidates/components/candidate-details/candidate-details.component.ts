import {Component, OnInit} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable, switchMap} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {CandidateState} from "../../../../core/state/candidate/candidate.state";
import {CandidateResponse} from "../../../../core/state/candidate/candidate";
import {GetCandidate, UpdateCandidate} from "../../../../core/state/candidate/candidate.action";
import {DirectoryState} from "../../../../core/state/directory/directory.state";
import {candidateFormToReqest} from "../../../../shared/mappers/candidates-mapper";
import {FormBuilder, Validators} from "@angular/forms";
import {NotificationService} from "../../../../core/services/notification.service";
import {Status} from "../../../../core/state/status";
import {compareWith} from "../../../../core/utils/compare.utils"
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.scss']
})
export class CandidateDetailsComponent implements OnInit {
  @Select(DirectoryState.getStatuses) statuses$!: Observable<Status[]>
  @Select(CandidateState.getCandidate) candidate$!: Observable<CandidateResponse>
  candidateForm: any;
  candidateId: any;
  resumeUrl: string | undefined;

  constructor(private _formBuilder: FormBuilder,
              private store: Store,
              private route: ActivatedRoute,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.candidateForm = this._formBuilder.group({
      status: ['', Validators.required],
    });
    this.route?.params.pipe(
      switchMap(
        (params: Params) => {
          this.candidateId = params['id'];
          return this.store.dispatch(new GetCandidate(this.candidateId));
        }
      ),
      switchMap(() => {
        return this.candidate$;
      }))
      .subscribe((candidateResponse: CandidateResponse) => {
        this.candidateForm.patchValue(candidateResponse);
      })
    this.candidateId = this.route.snapshot.params['id'];
  }

  get status() {
    return this.candidateForm.get('status')
  }

  compareCandidate(firstObject: any, secondObject: any): boolean {
    return compareWith(firstObject, secondObject)
  }

  onSubmit(data: CandidateResponse) {
    const candidate = candidateFormToReqest(data);
    this.store.dispatch(new UpdateCandidate(candidate, this.candidateId))
    this.notificationService.notify('Zaktualizowano kandydata')
    this.router.navigate(['/candidates'])
  }
}
