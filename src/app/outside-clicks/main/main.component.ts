import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  displayOptimized = false;

  constructor() { }

  ngOnInit() {
  }

  showOptimized () {
    this.displayOptimized = true;
  }

  showRegular() {
    this.displayOptimized = false;
  }
  
  ngAfterViewChecked() {
    console.log('Change detection triggered!');
  }
}
