import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { By } from '@angular/platform-browser';
import { PageContainerComponent } from '../../shared/components/page-container/page-container.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent, PageContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should contain paragraphs', () => {
    const contentElement = fixture.debugElement.query(By.css('.content'));
    expect(contentElement).toBeTruthy();

    const paragraphs = contentElement.nativeElement.querySelectorAll('p');
    expect(paragraphs.length).toBe(2);
  });
});
