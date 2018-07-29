import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import 'spectrum-colorpicker';

@Component({
  selector: 'app-color-picker-optimized',
  templateUrl: './color-picker-optimized.component.html',
  styleUrls: ['./color-picker-optimized.component.css'],
})
export class ColorPickerOptimizedComponent implements OnInit {

  @Output() change = new EventEmitter<string>();
  @ViewChild('picker') colorPickerEl: ElementRef;
  
  constructor(
    private ngZone: NgZone,
  ) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      (<any>$(this.colorPickerEl.nativeElement)).spectrum({
        change: (c) => {
          this.ngZone.run(() => {
            this.change.emit(c.toHexString());
          });
        }
      });
    });
  }

}
