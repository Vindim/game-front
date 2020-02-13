import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import {SystemComponent} from './system.component';

@NgModule({
    declarations: [
        SystemComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ],
    providers: []
})
export class SystemModule {}
