import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CandidateState } from '../../../../core/state/candidate/candidate.state';
import { CandidateResponse } from '../../../../core/state/candidate/candidate';
import { Paginated } from '../../../../core/state/paginated';
import { GetCandidates } from '../../../../core/state/candidate/candidate.action';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent implements OnInit {
  @Select(CandidateState.getCandidateList) candidates$!: Observable<
    Paginated<CandidateResponse[]>
  >;
  columnHeader = {
    nr: 'nr',
    name: 'Imię i nazwisko',
    locations: 'Lokalizacja',
    position: 'Stanowisko',
    status: 'Status',
    actions: 'Akcja',
  };

  pageSize = 5;
  currentPage = 0;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.loadCandidates();
  }

  pageChanged() {
    this.loadCandidates();
  }

  loadCandidates() {
    return this.store.dispatch(
      new GetCandidates(this.pageSize, this.currentPage)
    );
  }
}
