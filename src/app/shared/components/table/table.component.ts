import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Observable, tap } from 'rxjs';
import { Paginated } from '../../../core/state/paginated';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() url!: string;
  @Input() editModeElement!: boolean;
  @Input() deleteModeElement!: boolean;
  @Input() pageSize!: number;
  @Output() pageSizeChange = new EventEmitter<number>();
  @Input() currentPage!: number;
  @Output() currentPageChange = new EventEmitter<number>();

  @Input() columnHeader!: any;
  @Input() tableData!: Observable<Paginated<any>>;
  @Output() pageChange = new EventEmitter();
  @Output() deleteChange = new EventEmitter<string>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  totalRows = 0;
  objectKeys = Object.keys;
  dataSource!: MatTableDataSource<any>;

  constructor() {}

  ngOnInit() {
    this.loadData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  loadData() {
    this.tableData
      .pipe(
        tap((data: any) => {
          this.dataSource = new MatTableDataSource(data?.items);
        })
      )
      .subscribe((data: any) => {
        setTimeout(() => {
          this.paginator.pageIndex = this.currentPage;
          this.paginator.length = data?.meta?.totalItems;
        });
      });
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
