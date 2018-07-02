import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideClicksRoutingModule } from './outside-clicks-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [
    CommonModule,
    OutsideClicksRoutingModule
  ],
  declarations: [MainComponent]
})
export class OutsideClicksModule { }
