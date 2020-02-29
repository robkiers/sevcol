import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQRComponent } from './generate-qr.component';

describe('GenerateQRComponent', () => {
  let component: GenerateQRComponent;
  let fixture: ComponentFixture<GenerateQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateQRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
