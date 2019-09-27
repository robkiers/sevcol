import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalScannerComponent } from './medical-scanner.component';

describe('MedicalScannerComponent', () => {
  let component: MedicalScannerComponent;
  let fixture: ComponentFixture<MedicalScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
