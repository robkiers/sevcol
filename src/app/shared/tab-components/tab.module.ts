import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabContentComponent } from './tab-content.component';
import { ContentContainerDirective } from './content-container.directive';
import { TabService } from './tab.service';

@NgModule({
  declarations: [
    ContentContainerDirective,
    TabContentComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    TabService
  ],
  exports: [
    TabContentComponent
  ]
})

export class TabModule { }
