import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Paginated } from '../../../core/state/paginated';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges {
  @Input() url!: string;
  @Input() editModeElement!: boolean;
  @Input() deleteModeElement!: boolean;
  @Input() pageSize!: number;
  @Output() pageSizeChange = new EventEmitter<number>();
  @Input() currentPage!: number;
  @Output() currentPageChange = new EventEmitter<number>();

  @Input() columnHeader!: any;
  @Input() tableData!: Paginated<any> | any;
  @Output() pageChange = new EventEmitter();
  @Output() deleteChange = new EventEmitter<string>();
  @Input() isPagination: boolean = true;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  pageSizeOptions: number[] = [5, 10, 25, 100];
  totalRows = 0;
  objectKeys = Object.keys;
  dataSource!: MatTableDataSource<any>;

  constructor() {}

  ngOnInit() {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    const tableDate = changes['tableData']?.currentValue;
    if (tableDate) {
      this.dataSource = new MatTableDataSource(
        this.isPagination ? tableDate?.items : tableDate
      );
      if (this.isPagination && this.paginator) {
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = this.tableData?.meta?.totalItems;
      }
    }
  }

  loadData() {
    if (this.isPagination) {
      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage;
        this.paginator.length = this.tableData?.meta?.totalItems;
      });
    }
  }

  pageChanged(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.pageSizeChange.emit(this.pageSize);
    this.currentPageChange.emit(this.currentPage);
    this.pageChange.emit();
  }

  delete(id: string) {
    this.deleteChange.emit(id);
    this.pageSizeChange.emit(this.pageSize);
    this.currentPageChange.emit(this.currentPage);
  }
}
