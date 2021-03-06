import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';

import { TableOverviewModule } from './base-class/table-overview/table-overview.module';
import { DesktopCameraService } from './services/desktop-camera.service';
import { AbstractCameraService, cameraFactory } from './services/abstract-camera.service';
import { PlatformInformationProvider } from './services/platform-information.provider';
import { GenerateQRModule } from './base-class/generate-qr/generate-qr.module';
import { SwipeTabDirective } from './directives/SwipeTabDirective.directive';

@NgModule({
  providers: [
    DesktopCameraService,
    PlatformInformationProvider,
    {
      provide: AbstractCameraService,
      useFactory: cameraFactory,
      deps: [PlatformInformationProvider]
    }
  ],
  imports: [
    CommonModule,
  ],
  declarations: [
    SwipeTabDirective
  ],
  exports: [
    CommonModule,
    ScrollingModule,
    RouterModule,
    MatButtonModule,
    MatTableModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatTooltipModule,
    MatSortModule,
    MatDialogModule,
    TableOverviewModule,
    MatExpansionModule,
    OverlayModule,
    MatSnackBarModule,
    MatListModule,
    GenerateQRModule,
    MatTabsModule,
    SwipeTabDirective
  ],
  // declarations: []
})
export class SharedModule { }
