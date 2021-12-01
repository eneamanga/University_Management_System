import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeacherFormComponent } from './new-teacher-form.component';

describe('NewTeacherFormComponent', () => {
  let component: NewTeacherFormComponent;
  let fixture: ComponentFixture<NewTeacherFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTeacherFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeacherFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
