import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  tabs = ['First', 'Second', 'Third'];
  selectedTab;

  constructor(
    // private _componentFactoryResolver: ComponentFactoryResolver
  ) { }


  ngOnInit() {

  }

  determineScreen() {
    const innerWidth = window.innerWidth;
    if (innerWidth < 500) {
      return '3:1';
    }
    return '10:1';
  }

}
