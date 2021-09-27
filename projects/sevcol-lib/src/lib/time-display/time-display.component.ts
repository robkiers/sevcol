import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'lib-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {

  @Input() timeAdjustment: 0;

  @Output() currentTime = new EventEmitter();

  private time = new BehaviorSubject<any>(this.timeAdjustment + new Date().getTime());
  private _time: Observable<any> = this.time.asObservable();

  // timeAdjustment: number;


  constructor() { }

  ngOnInit(): void {
  }

}
