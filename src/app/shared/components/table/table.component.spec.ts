import { TableComponent } from './table.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  MatCell,
  MatCellDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTableModule,
} from '@angular/material/table';
import { MatTabHeader } from '@angular/material/tabs';
import { CdkTableModule } from '@angular/cdk/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { tableData } from '../../../core/data/table';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let de: DebugElement;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        CdkTableModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
      ],
      declarations: [
        MatTabHeader,
        MatHeaderRow,
        MatHeaderCell,
        MatHeaderCellDef,
        MatHeaderRowDef,
        MatRow,
        MatRowDef,
        MatCell,
        MatCellDef,
        TableComponent,
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TableComponent);

    component = fixture.componentInstance;
    component.url = '/candidates';
    component.deleteModeElement = true;
    component.pageSize = 5;
    component.currentPage = 0;
    component.isPagination = true;
    component.tableData = tableData;
    component.columnHeader = {
      nr: 'Nr',
      position: 'Tytuł oferty',
      seniorities: 'Poziom doświadczenia',
      locations: 'Lokalizaja',
      actions: 'Akcja',
    };

    fixture.detectChanges();
  });
  it('should has correct rows', () => {
    de = fixture.debugElement;
    const rowDebugElements = de.query(By.css('.table'));
    expect(rowDebugElements).toBeTruthy();
  });

  it('should have column headers', () => {
    expect(component.columnHeader).toBeDefined();
  });
});
