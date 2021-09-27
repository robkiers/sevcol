import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-display',
  templateUrl: './status-display.component.html',
  styleUrls: ['./status-display.component.scss'],
})
export class StatusDisplayComponent implements OnInit {
  shipDocked = true;
  airlockOpen = true;
  activeCrew = 10;
  embarkedCrew = 8;

  shipTime = 900000;
  dockedAtStation = null;

  shipDockReply = 'granted';


  constructor() {}

  ngOnInit(): void {}
}
