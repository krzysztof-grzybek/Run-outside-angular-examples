import { Component, ElementRef, AfterViewInit, Input, OnDestroy, ViewChild, NgZone } from '@angular/core';

interface Color  {
  r: number;
  g: number;
  b: number;
};

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements AfterViewInit {

  @Input() inZone = true;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  private interval: Timer;
  private color: Color = {
    r: 255,
    g: 0,
    b: 0,
  };
  private stagePhase = 0;

  constructor(private ngZone: NgZone) { }

  ngAfterViewInit() {
    if (this.inZone) {
      this.interval = setInterval(() => {
        this.setNextColor()
        this.paint();
      }, 10)
    } else {
      this.ngZone.runOutsideAngular(() => {
        this.interval = setInterval(() => {
          this.setNextColor()
          this.paint();
        }, 10)
      });  
    }
  }

  setNextColor() {
    switch (this.stagePhase) {
      case 0:
        this.color.g++;
        if (this.color.g === 255) this.stagePhase++;
        break;
      case 1:
        this.color.r--;
        if (this.color.r === 0) this.stagePhase++;
        break;
      case 2:
        this.color.b++;
        if (this.color.b === 255) this.stagePhase++;
        break;
      case 3:
        this.color.g--;
        if (this.color.g === 0) this.stagePhase++;
        break;
      case 4:
        this.color.r++;
        if (this.color.r === 255) this.stagePhase++;
        break;
      case 5:
        this.color.b--;
        if (this.color.b === 0) this.stagePhase = 0;
        break;
    }
  }

  paint() {
    const el = this.canvas.nativeElement;
    var ctx = el.getContext('2d');
    ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
    ctx.fillRect(0, 0, el.width, el.height);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
