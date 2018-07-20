import { Component, ElementRef, Inject, OnInit, NgZone } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dropdown-optimized',
  templateUrl: './dropdown-optimized.component.html',
  styleUrls: ['./dropdown-optimized.component.css']
})
export class DropdownOptimizedComponent implements OnInit {

  dropdownOpened = false;
  constructor(
    private elRef: ElementRef,
    private ngZone: NgZone,
    @Inject(DOCUMENT) private document: any
  ) { }

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.document.addEventListener('click', this.onDocumentClick.bind(this));
    });
  }

  openDropdown() {
    this.dropdownOpened = true;
  }

  onDocumentClick(e: MouseEvent) {
    if (!this.elRef.nativeElement.contains(e.target) && this.dropdownOpened) {
      this.ngZone.run(() => {
        this.dropdownOpened = false;
      });
    }
  }
}
