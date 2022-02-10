import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateMealComponent } from './template-meal.component';

describe('TemplateMealComponent', () => {
  let component: TemplateMealComponent;
  let fixture: ComponentFixture<TemplateMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateMealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
