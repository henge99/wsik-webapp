import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFoodComponent } from './template-food.component';

describe('TemplateFoodComponent', () => {
  let component: TemplateFoodComponent;
  let fixture: ComponentFixture<TemplateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
