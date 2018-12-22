import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComletedProjectsComponent } from './comleted-projects.component';

describe('ComletedProjectsComponent', () => {
  let component: ComletedProjectsComponent;
  let fixture: ComponentFixture<ComletedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComletedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComletedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
