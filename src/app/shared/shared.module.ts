import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../angular-material.module';
import { PageContainerComponent } from './components/page-container/page-container.component';
import { TableComponent } from './components/table/table.component';
import { RouterLink } from '@angular/router';
import { IsRoute } from './pipes/route.pipe';
import { IsArrayPipe } from './pipes/is-array.pipe';
import { ShortNamePipe } from './pipes/short-name.pipe';

const COMPONENTS = [PageContainerComponent, TableComponent];
const PIPES = [IsArrayPipe, IsRoute, ShortNamePipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, AngularMaterialModule, RouterLink],
  exports: [AngularMaterialModule, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
