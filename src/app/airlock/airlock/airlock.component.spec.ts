import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlockComponent } from './airlock.component';

describe('AirlockComponent', () => {
  let component: AirlockComponent;
  let fixture: ComponentFixture<AirlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
