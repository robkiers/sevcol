import { Component, OnInit } from "@angular/core";
import { ShipStatsService } from 'src/app/core/ship-stats/ship-stats.service';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  newsList = [
    {
      title: "Mars Rebels",
      shortHand: "Mars super computer looses control over settlements",
    },
    {
      title: "Mars Rebels again",
      shortHand: "Mars rebels lose settlement",
    },
  ];

  warningList = [
    {
      title: "Red Alert",
      shortHand: "hostile vesiles incomming",
      threatLevel: "3",
    },
  ];

  time;
  currentDestination = "Customs 3";
  currentLocation = "";

  constructor(
    protected _shipstats: ShipStatsService,
    ) {}

  ngOnInit(): void {
    this.time = this._shipstats.getTime();
  }
}
