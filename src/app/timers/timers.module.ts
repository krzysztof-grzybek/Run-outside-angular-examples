import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimersRoutingModule } from './timers-routing.module';
import { MainComponent } from './main/main.component';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  imports: [
    CommonModule,
    TimersRoutingModule
  ],
  declarations: [MainComponent, CanvasComponent]
})
export class TimersModule { }
