import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDossierComponent } from './patient-dossier.component';

describe('DossierComponent', () => {
  let component: PatientDossierComponent;
  let fixture: ComponentFixture<PatientDossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
