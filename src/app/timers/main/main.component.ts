import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewChecked, OnInit {

  private inZone = true;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    console.log('View checked!');
  }

  setZone(inZone: boolean) {
    this.inZone = inZone;
  }
}
