import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipStatsComponent } from './ship-stats.component';

describe('ShipStatsComponent', () => {
  let component: ShipStatsComponent;
  let fixture: ComponentFixture<ShipStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
