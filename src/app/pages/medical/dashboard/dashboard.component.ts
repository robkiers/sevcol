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
    private _componentFactoryResolver: ComponentFactoryResolver
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

  openTab(title, template, data, isCloseable = false) {
    let componentFactory = this._componentFactoryResolver.resolveComponentFactory(TabComponent);

    // get the viewcontainer
    let viewContainerRef = this.dynamicTabPlaceholder.viewContainer;

    // instantiate the component
    let componentRef = viewContainerRef.createComponent(componentFactory);
    let instance: TabComponent = componentRef.instance as TabComponent;

    // set the props
    instance.title = title;
    instance.template = template;
    instance.dataContext = data;
    instance.isCloseable = isCloseable;
  
    ...
  }
}


// import { DynamicTabsDirective } from './dynamic-tabs.directive';

// @Component({
//   ...
//   template: `
//     ...
//     <ng-template dynamic-tabs></ng-template>
//   `
// })
// export class TabsComponent {
//   @ViewChild(DynamicTabDirective) dynamicTabPlaceholder;

//   openTab(...) {
//     let componentFactory = this._componentFactoryResolver.resolveComponentFactory(TabComponent);

//     // get the viewcontainer
//     let viewContainerRef = this.dynamicTabPlaceholder.viewContainer;
//   }
// }