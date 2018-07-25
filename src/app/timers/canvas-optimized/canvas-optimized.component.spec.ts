import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasOptimizedComponent } from './canvas-optimized.component';

describe('CanvasOptimizedComponent', () => {
  let component: CanvasOptimizedComponent;
  let fixture: ComponentFixture<CanvasOptimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasOptimizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasOptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
