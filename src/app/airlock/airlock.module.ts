import { NgModule } from '@angular/core';
import { AirlockComponent } from './airlock/airlock.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ActiveCrewListComponent } from './active-crew-list/active-crew-list.component';
import { RegisterCharacterComponent } from './register-character/register-character.component';
import { FindPassengerComponent } from './find-passenger/find-passenger.component';

const routes: Routes = [
  { path: '', component: AirlockComponent }
];

@NgModule({
  declarations: [
    AirlockComponent,
    ActiveCrewListComponent,
    RegisterCharacterComponent,
    FindPassengerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    ActiveCrewListComponent,
    RegisterCharacterComponent,
    FindPassengerComponent
  ]
})
export class AirlockModule { }
