import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiComponent } from './statisti.component';

describe('StatistiComponent', () => {
  let component: StatistiComponent;
  let fixture: ComponentFixture<StatistiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiComponent]
    });
    fixture = TestBed.createComponent(StatistiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
