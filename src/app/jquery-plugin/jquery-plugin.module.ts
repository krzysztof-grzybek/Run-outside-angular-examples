import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JqueryPluginRoutingModule } from './jquery-plugin-routing.module';
import { MainComponent } from './main/main.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { ColorPickerOptimizedComponent } from './color-picker-optimized/color-picker-optimized.component';

@NgModule({
  imports: [
    CommonModule,
    JqueryPluginRoutingModule
  ],
  declarations: [MainComponent, ColorPickerComponent, ColorPickerOptimizedComponent]
})
export class JqueryPluginModule { }
