import { LocationDirectory } from '../model/location';
import { SeniorityDirectory } from '../model/seniority';
import { StatusDirectory } from '../model/status';

export const locationsData: LocationDirectory[] = [
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
  {
    id: '6c449e5d-1fcd-4156-8d31-16e0801effe6',
    key: 'GDANSK',
    name: 'Gdańsk',
  },
  {
    id: 'a28142cf-9c8b-401a-8eeb-d539e5c8f894',
    key: 'Tricity',
    name: 'Trójmiasto',
  },
  {
    id: '0959cd3d-06d5-4b2a-9324-2f03c0f4ba7f',
    key: 'POZNAN',
    name: 'Poznań',
  },
  {
    id: '2ff64f13-9ab2-43f1-acea-7954cadd8ba7',
    key: 'GDYNIA',
    name: 'Gdynia',
  },
  {
    id: '37d7b36b-45dd-4eed-b1ba-270b2058ed76',
    key: 'LUBLIN',
    name: 'Lublin',
  },
];
export const senioritiesData: SeniorityDirectory[] = [
  {
    id: 'c9ba1104-f794-45b1-a4e6-2b1c8cf48a8c',
    key: 'TRAINEE',
    name: 'Stażysta',
  },
  {
    id: '5664e43d-592b-44da-b759-aaf71f5e9644',
    key: 'JUNIOR',
    name: 'Junior',
  },
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
  {
    id: 'c1ecb6a9-3d9c-4d07-8fab-66d42e167fb1',
    key: 'EXPERT',
    name: 'Expert',
  },
];
export const statusesData: StatusDirectory[] = [
  {
    id: 'd05e3c63-f7a2-4e6b-b055-1e469790396d',
    key: 'APPLIED',
    name: 'Aplikował',
  },
  {
    id: '8f709032-ba30-46d7-98cd-a3be85b8be04',
    key: 'INPROGRESS',
    name: 'W trakcie',
  },
  {
    id: '899a61cd-83df-46a7-ab19-85d034e1a92a',
    key: 'NOTACCEPTED',
    name: 'Nie zaakceptowano',
  },
  {
    id: '1169683c-778f-4ae7-9bff-acbec68f4b17',
    key: 'ACCEPTED',
    name: 'Zaakceptowano',
  },
];
