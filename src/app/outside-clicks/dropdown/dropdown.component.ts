import { Component, ElementRef, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  dropdownOpened = false;
  constructor(
    private elRef: ElementRef
  ) { }

  ngOnInit() {
  }

  openDropdown() {
    this.dropdownOpened = true;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if (!this.elRef.nativeElement.contains(e.target)) {
      this.dropdownOpened = false;
    }
  }

}
