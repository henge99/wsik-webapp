import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEntryComponent } from './form-add-entry.component';

describe('FormAddEntryComponent', () => {
  let component: FormAddEntryComponent;
  let fixture: ComponentFixture<FormAddEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
