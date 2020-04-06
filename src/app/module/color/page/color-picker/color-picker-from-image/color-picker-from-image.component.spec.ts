import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerFromImageComponent } from './color-picker-from-image.component';

describe('ColorPickerFromImageComponent', () => {
  let component: ColorPickerFromImageComponent;
  let fixture: ComponentFixture<ColorPickerFromImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerFromImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerFromImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
