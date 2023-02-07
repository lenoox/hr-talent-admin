import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from "../angular-material.module";
import { PageContainerComponent } from './components/page-container/page-container.component';
import {TableComponent} from "./components/table/table.component";
import {RouterLink} from "@angular/router";
import {IsRoute} from "./pipes/route.pipe";
import {IsArrayPipe} from "./pipes/is-array.pipe";
import {ShortNamePipe} from "./pipes/short-name.pipe";
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import {QuillEditorComponent, QuillViewComponent} from "ngx-quill";
import {ReactiveFormsModule} from "@angular/forms";
import {TextPreviewComponent} from "./components/text-preview/text-preview.component";

const COMPONENTS = [
  PageContainerComponent,
  TableComponent,
  TextPreviewComponent,
  TextEditorComponent,
]
const PIPES = [
  IsArrayPipe,
  IsRoute,
  ShortNamePipe
]
const MODULES = [
  CommonModule,
  AngularMaterialModule,
  RouterLink,
  ReactiveFormsModule,
  QuillViewComponent,
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    ...MODULES,
    QuillEditorComponent,
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
    ...PIPES,
  ]
})
export class SharedModule { }
