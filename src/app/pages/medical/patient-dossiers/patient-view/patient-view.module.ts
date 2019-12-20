import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientViewComponent } from './patient-view.component';

@NgModule({
    declarations: [
        PatientViewComponent,
    ],
    imports: [
        SharedModule,
    ],
    exports: [
        PatientViewComponent
    ],
})
export class PatientViewModule { }
