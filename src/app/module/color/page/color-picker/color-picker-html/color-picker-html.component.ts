import { Component, OnInit } from '@angular/core';
import { ColorUtilService } from 'src/app/shared/util/color-util.service';

@Component({
  selector: 'app-color-picker-html',
  templateUrl: './color-picker-html.component.html',
  styleUrls: ['./color-picker-html.component.css']
})
export class ColorPickerHtmlComponent implements OnInit {
  // from https://www.w3schools.com/colors/colors_picker.asp
  colorRange: {red: number; green: number; blue: number} = {
    red: 0,
    green: 0,
    blue: 0,
  };
  colorRangeHex: string;

  constructor(
    private _colorUtil: ColorUtilService,
  ) { }

  ngOnInit() {
    this.updateColorRangeHex();
  }

  onColorRange = () => {
    this.updateColorRangeHex();
  }

  private updateColorRangeHex = () => {
    this.colorRangeHex = this._colorUtil.rgbToHex(this.colorRange.red, this.colorRange.green, this.colorRange.blue);
  }
}
