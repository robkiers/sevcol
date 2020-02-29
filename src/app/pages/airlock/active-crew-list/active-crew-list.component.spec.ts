import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCrewListComponent } from './active-crew-list.component';

describe('ActiveCrewListComponent', () => {
  let component: ActiveCrewListComponent;
  let fixture: ComponentFixture<ActiveCrewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveCrewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCrewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
