import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  displayOptimized = false;
  color: string;
  
  constructor() { }

  ngOnInit() {
  }
  
  showOptimized () {
    this.displayOptimized = true;
  }

  showRegular() {
    this.displayOptimized = false;
  }

  onChange(color: string) {
    this.color = color;
  }

  ngAfterViewChecked() {
    console.log('View checked!');
  }
}
