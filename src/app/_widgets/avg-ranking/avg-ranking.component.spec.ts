import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgRankingComponent } from './avg-ranking.component';

describe('AvgRankingComponent', () => {
  let component: AvgRankingComponent;
  let fixture: ComponentFixture<AvgRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
