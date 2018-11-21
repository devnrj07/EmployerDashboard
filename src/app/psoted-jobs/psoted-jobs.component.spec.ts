import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsotedJobsComponent } from './psoted-jobs.component';

describe('PsotedJobsComponent', () => {
  let component: PsotedJobsComponent;
  let fixture: ComponentFixture<PsotedJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsotedJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsotedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
