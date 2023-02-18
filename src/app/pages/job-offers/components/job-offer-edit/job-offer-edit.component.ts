import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { JobOfferState } from '../../../../core/state/job-offer/job-offer.state';
import { Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { JobOfferResponse } from '../../../../core/state/job-offer/job-offer';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AddJobOffer,
  DeleteJobOffer,
  GetJobOffer,
  UpdateJobOffer,
} from '../../../../core/state/job-offer/job-offer.action';
import { FormBuilder, Validators } from '@angular/forms';
import { Seniority } from '../../../../core/state/seniority';
import { Location } from '../../../../core/state/location';
import { DirectoryState } from '../../../../core/state/directory/directory.state';
import { NotificationService } from '../../../../core/services/notification.service';
import { jobOfferFormToReqest } from '../../../../shared/mappers/job-offer-mapper';
import { compareWithId } from '../../../../core/utils/compare.utils';

@Component({
  selector: 'app-job-offer-edit',
  templateUrl: './job-offer-edit.component.html',
  styleUrls: ['./job-offer-edit.component.scss'],
})
export class JobOfferEditComponent implements OnInit {
  @Select(JobOfferState.getJobOffer) jobOffer$!: Observable<JobOfferResponse>;
  @Select(DirectoryState.getLocations) locations$!: Observable<Location[]>;
  @Select(DirectoryState.getSeniorities) seniorities$!: Observable<Seniority[]>;

  jobOffer!: JobOfferResponse;
  routeId!: Subscription;
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
    this.jobOfferForm = this.getForm();
    this.routeId = this.route?.params
      .pipe(
        switchMap(params => {
          if (params['state'] === 'edit' && params['id']) {
            this.isEditMode = true;
            this.id = params['id'];
            return this.store.dispatch(new GetJobOffer(this.id));
          } else {
            this.isEditMode = false;
            return of(false);
          }
        }),
        switchMap(() => {
          return this.jobOffer$;
        })
      )
      .subscribe((jobOfferResponse: JobOfferResponse) => {
        this.jobOfferForm = this.getForm(jobOfferResponse);
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
  getForm(data: any = null) {
    if (!this.isEditMode) {
      data = {
        position: null,
        offerDescription: null,
        seniorities: [],
        locations: [],
      };
    }
    return this._formBuilder.group({
      position: [data.position, Validators.required],
      offerDescription: [data.offerDescription, Validators.required],
      seniorities: [data.seniorities],
      locations: [data.locations],
    });
  }
  delete(id: string) {
    this.store.dispatch(new DeleteJobOffer(id));
  }

  compareJobOffer(firstObject: any, secondObject: any): boolean {
    return compareWithId(firstObject, secondObject);
  }

  onSubmit(data: JobOfferResponse) {
    const jobOffer = jobOfferFormToReqest(data);
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
