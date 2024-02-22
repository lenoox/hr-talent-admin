import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorComponent } from './text-editor.component';
import { QuillEditorComponent } from 'ngx-quill';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('TextEditorComponent', () => {
  let component: TextEditorComponent;
  let fixture: ComponentFixture<TextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TextEditorComponent],
      imports: [QuillEditorComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
