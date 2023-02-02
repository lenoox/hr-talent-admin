import {CandidateRequest} from './candidate';

export class GetCandidate {
  static readonly type = '[Candidate] Get candidate'
  constructor(public id: string) {
  }
}

export class GetCandidates {
  static readonly type = '[Candidate] Get candidates'
  constructor(public pageSize:number, public currentPage:number) {
  }
}

export class UpdateCandidate {
  static readonly type = '[Candidate] Update candidate'
  constructor(public payload: CandidateRequest, public id: string){
  }
}
