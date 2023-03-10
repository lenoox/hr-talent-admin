import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-job-offers',
  templateUrl: './job-offers.component.html',
  styleUrls: ['./job-offers.component.scss'],
})
export class JobOffersComponent {
  public isRoute!: boolean;

  constructor(private router: Router) {
    router.events.pipe(untilDestroyed(this)).subscribe(val => {
      if (val instanceof NavigationEnd) {
        this.isRoute = val.url === '/job-offers';
      }
    });
  }
}
