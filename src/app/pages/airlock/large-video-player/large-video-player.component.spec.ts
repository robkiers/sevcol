import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeVideoPlayerComponent } from './large-video-player.component';

describe('LargeVideoPlayerComponent', () => {
  let component: LargeVideoPlayerComponent;
  let fixture: ComponentFixture<LargeVideoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeVideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
