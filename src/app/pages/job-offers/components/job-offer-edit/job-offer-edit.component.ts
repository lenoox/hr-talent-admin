import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { JobOfferState } from '../../../../core/state/job-offer/job-offer.state';
import { Observable, of, Subscription, switchMap } from 'rxjs';
import {
  JobOfferForm,
  JobOfferResponse,
} from '../../../../core/state/job-offer/job-offer';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AddJobOffer,
  DeleteJobOffer,
  GetJobOffer,
  UpdateJobOffer,
} from '../../../../core/state/job-offer/job-offer.action';
import { FormBuilder, Validators } from '@angular/forms';
import { SeniorityDirectory } from '../../../../core/model/seniority';
import { LocationDirectory } from '../../../../core/model/location';
import { DirectoryState } from '../../../../core/state/directory/directory.state';
import { NotificationService } from '../../../../core/services/notification.service';
import { jobOfferFormToRequest } from '../../../../shared/mappers/job-offer-mapper';
import { compareWithId } from '../../../../core/utils/compare.utils';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-job-offer-edit',
  templateUrl: './job-offer-edit.component.html',
  styleUrls: ['./job-offer-edit.component.scss'],
})
export class JobOfferEditComponent implements OnInit {
  @Select(JobOfferState.getJobOffer) jobOffer$: Observable<JobOfferResponse>;
  @Select(DirectoryState.getLocations) locations$: Observable<
    LocationDirectory[]
  >;
  @Select(DirectoryState.getSeniorities) seniorities$: Observable<
    SeniorityDirectory[]
  >;

  jobOffer: JobOfferResponse;
  routeId: Subscription;
  id: string = '';
  isEditMode: boolean = false;
  jobOfferForm: any;

  constructor(
    private _formBuilder: FormBuilder,
    private store: Store,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.jobOfferForm = this._formBuilder.group({
      position: [null, Validators.required],
      offerDescription: [null, Validators.required],
      seniorities: [],
      locations: [],
    });
    this.routeId = this.route?.params
      .pipe(
        untilDestroyed(this),
        switchMap(params => {
          if (params['state'] === 'edit' && params['id']) {
            this.isEditMode = true;
            this.id = params['id'];
            return this.store
              .dispatch(new GetJobOffer(this.id))
              .pipe(switchMap(() => this.jobOffer$));
          } else {
            this.isEditMode = false;
            return of(null);
          }
        })
      )
      .subscribe((jobOfferResponse: JobOfferResponse | null) => {
        if (jobOfferResponse) {
          this.jobOfferForm.patchValue({
            position: jobOfferResponse.position,
            offerDescription: jobOfferResponse.offerDescription,
            seniorities: jobOfferResponse.seniorities,
            locations: jobOfferResponse.locations,
          });
        }
      });
  }

  get position() {
    return this.jobOfferForm.get('position');
  }

  get offerDescription() {
    return this.jobOfferForm.get('offerDescription');
  }

  get seniorities() {
    return this.jobOfferForm.get('seniorities');
  }

  get locations() {
    return this.jobOfferForm.get('locations');
  }

  delete(id: string) {
    this.store.dispatch(new DeleteJobOffer(id));
  }

  compareJobOffer(firstObject: any, secondObject: any): boolean {
    return compareWithId(firstObject, secondObject);
  }

  onSubmit(data: JobOfferForm) {
    const jobOffer = jobOfferFormToRequest(data);
    if (this.isEditMode) {
      this.store.dispatch(new UpdateJobOffer(jobOffer, this.id));
      this.notificationService.notify('Zaktualizowano ofertę');
    } else {
      this.store.dispatch(new AddJobOffer(jobOffer));
      this.notificationService.notify('Dodano ofertę');
    }
    this.router.navigate(['/job-offers']);
  }
}
