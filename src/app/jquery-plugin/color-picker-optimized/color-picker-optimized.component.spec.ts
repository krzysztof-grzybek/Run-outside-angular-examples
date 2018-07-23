import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerOptimizedComponent } from './color-picker-optimized.component';

describe('ColorPickerOptimizedComponent', () => {
  let component: ColorPickerOptimizedComponent;
  let fixture: ComponentFixture<ColorPickerOptimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerOptimizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerOptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
