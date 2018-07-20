import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutsideClicksRoutingModule } from './outside-clicks-routing.module';
import { MainComponent } from './main/main.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownOptimizedComponent } from './dropdown-optimized/dropdown-optimized.component';

@NgModule({
  imports: [
    CommonModule,
    OutsideClicksRoutingModule
  ],
  declarations: [MainComponent, DropdownComponent, DropdownOptimizedComponent]
})
export class OutsideClicksModule { }
