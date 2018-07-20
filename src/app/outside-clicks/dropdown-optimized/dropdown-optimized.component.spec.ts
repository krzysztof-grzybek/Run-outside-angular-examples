import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownOptimizedComponent } from './dropdown-optimized.component';

describe('DropdownOptimizedComponent', () => {
  let component: DropdownOptimizedComponent;
  let fixture: ComponentFixture<DropdownOptimizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownOptimizedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownOptimizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
