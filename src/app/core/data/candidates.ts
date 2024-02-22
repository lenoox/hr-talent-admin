import { CandidateResponse } from '../state/candidate/candidate';

export const candidatesData = {
  items: [
    {
      id: '635a0835-6aa8-4e8e-8744-7b170f7b4d7f',
      firstName: 'Jan',
      lastName: 'Nowak',
      position: 'Angular Developer',
      attachment: '4d77101c783ee37271c21d0ec2ddafcc7.pdf',
      aboutMe: 'Programista z 3 letnim doświadczeniem',
      locations: {
        id: '6c449e5d-1fcd-4156-8d31-16e0801effe6',
        key: 'GDANSK',
        name: 'Gdańsk',
      },
      status: {
        id: 'd05e3c63-f7a2-4e6b-b055-1e469790396d',
        key: 'APPLIED',
        name: 'Aplikował',
      },
      jobOffer: [
        {
          id: 'ebde3331-7aea-4b58-bd9e-e638b76bb598',
          position: 'Frontend Developer',
          offerDescription:
            '<p>Requirements:</p><p>Angular,</p><p>TypeScript,</p><p>RxJS,</p><p>NgRx,</p><p>Unit testing</p>',
          seniorities: [
            {
              id: '4f9fc6f0-e3fb-42d5-86bb-7c44297e146c',
              key: 'MID',
              name: 'Mid',
            },
            {
              id: '5b75abf2-5f73-4d90-a89c-039e83cc5161',
              key: 'SENIOR',
              name: 'Senior',
            },
          ],
          locations: [
            {
              id: '499869cb-fb33-47c4-8f80-8b0ce5322a20',
              key: 'WARSAW',
              name: 'Warszawa',
            },
            {
              id: '8d1e0232-b520-4d0d-8549-aae546064c30',
              key: 'CRACOW',
              name: 'Kraków',
            },
            {
              id: '243f4fdc-1f8e-4532-ab15-814c0a837a71',
              key: 'WROCLAW',
              name: 'Wrocław',
            },
          ],
        },
      ],
    },
  ],
  meta: {
    totalItems: 1,
    itemCount: 1,
    itemsPerPage: 5,
    totalPages: 1,
    currentPage: 1,
  },
};
export const candidateData: CandidateResponse = {
  id: '635a0835-6aa8-4e8e-8744-7b170f7b4d7f',
  firstName: 'Jan',
  lastName: 'Nowak',
  position: 'Angular Developer',
  attachment: '4d77101c783ee37271c21d0ec2ddafcc7.pdf',
  aboutMe: 'Programista z 3 letnim doświadczeniem',
  locations: {
    id: '6c449e5d-1fcd-4156-8d31-16e0801effe6',
    key: 'GDANSK',
    name: 'Gdańsk',
  },
  status: {
    id: 'd05e3c63-f7a2-4e6b-b055-1e469790396d',
    key: 'APPLIED',
    name: 'Aplikował',
  },
  jobOffer: [
    {
      id: 'ebde3331-7aea-4b58-bd9e-e638b76bb598',
      position: 'Frontend Developer',
    },
  ],
};
