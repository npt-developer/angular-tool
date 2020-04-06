import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerHtmlComponent } from './color-picker-html.component';

describe('ColorPickerHtmlComponent', () => {
  let component: ColorPickerHtmlComponent;
  let fixture: ComponentFixture<ColorPickerHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
