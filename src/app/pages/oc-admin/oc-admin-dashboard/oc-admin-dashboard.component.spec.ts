import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcAdminDashboardComponent } from './oc-admin-dashboard.component';

describe('OcAdminDashboardComponent', () => {
  let component: OcAdminDashboardComponent;
  let fixture: ComponentFixture<OcAdminDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcAdminDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
