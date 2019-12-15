import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DashboardModule } from './pages/medical/dashboard/dashboard.module';
import { PrintLayoutComponent } from './shared/base-class/print-layout/print-layout.component';

// import { PrintLayoutModule } from './shared/base-class/print-layout/print-layout.module';

@NgModule({
  declarations: [
    AppComponent,
    PrintLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // PrintLayoutModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
