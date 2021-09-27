import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevcolLibComponent } from './sevcol-lib.component';

describe('SevcolLibComponent', () => {
  let component: SevcolLibComponent;
  let fixture: ComponentFixture<SevcolLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevcolLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SevcolLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
