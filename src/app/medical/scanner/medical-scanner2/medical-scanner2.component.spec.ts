import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalScanner2Component } from './medical-scanner2.component';

describe('MedicalScanner2Component', () => {
  let component: MedicalScanner2Component;
  let fixture: ComponentFixture<MedicalScanner2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalScanner2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalScanner2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
