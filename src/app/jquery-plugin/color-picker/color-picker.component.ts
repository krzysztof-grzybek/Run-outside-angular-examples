import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';
import 'spectrum-colorpicker';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ColorPickerComponent implements OnInit {

  @Output() change = new EventEmitter<string>();
  @ViewChild('picker') colorPickerEl: ElementRef;

  ngOnInit() {
    (<any>$(this.colorPickerEl.nativeElement)).spectrum({
      change: (c) => {
        this.change.emit(c.toHexString());
      }
    });
  }

}
