import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlockStatusComponent } from './airlock-status.component';

describe('AirlockStatusComponent', () => {
  let component: AirlockStatusComponent;
  let fixture: ComponentFixture<AirlockStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlockStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlockStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
