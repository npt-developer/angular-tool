import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ColorUtilService } from 'src/app/shared/util/color-util.service';
import { Base64UtilService } from 'src/app/shared/util/base64-util.service';

@Component({
  selector: 'app-color-picker-from-image',
  templateUrl: './color-picker-from-image.component.html',
  styleUrls: ['./color-picker-from-image.component.css']
})
export class ColorPickerFromImageComponent implements OnInit, AfterViewInit {

  @ViewChild('img', {static: false})
  img: ElementRef<HTMLImageElement>;
  @ViewChild('canvas', {static: false})
  canvas: ElementRef<HTMLCanvasElement>;

  hasImage: boolean = false;
  imageElement: HTMLImageElement;
  canvasElement: HTMLCanvasElement;
  // position on image when clicked
  x: number;
  y: number;

  resultColor: string;
  moveColor: string;

  constructor(
    private _colorUtil: ColorUtilService,
    private _base64Util: Base64UtilService,
  ) { }

  ngOnInit() {
    // from https://www.cssscript.com/demo/pick-a-color-from-an-image-using-canvas-and-javascript/
  }

  ngAfterViewInit() {
    this.imageElement = this.img.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.imageElement.onload = () => {
      // init canvas when image loaded
      this.initCanvasImgae(this.imageElement.src);
    }
  }

  imageSelected = (data: string | ArrayBuffer) => {
    let dataBase64String: string;
    if (typeof data === 'string') {
      dataBase64String = data;
    } else if (data instanceof ArrayBuffer) {
      dataBase64String = this._base64Util.arrayBufferToBase64(data);
    }
    this.imageElement.src = dataBase64String;
    
    this.hasImage = true;
  }

  imageClick = (event: MouseEvent) => {
    if(this.hasImage && event.offsetX) {
      this.x = event.offsetX;
      this.y = event.offsetY;
      this.getColorOfImage();
    } 
  }

  onMouseMove =  (event: MouseEvent) => {
    if(this.hasImage && event.offsetX) {
      this.x = event.offsetX;
      this.y = event.offsetY;
      this.getColorOfImage(false);
    }
  }

  getColorOfImage = (isClick: boolean = true) => {
    // get image data
    var p = this.canvasElement
      .getContext('2d')
      .getImageData(this.x, this.y, 1, 1).data;
    // show info
    const rgb = {
      r: p[0],
      g: p[1],
      b: p[2],
    };
    const hex: string = this._colorUtil.rgbToHex(rgb.r, rgb.g, rgb.b);
    if (isClick) {
      this.resultColor = hex;
    } else {
      this.moveColor = hex;
    }
  }

  initCanvasImgae = (data: string) => {
    this.canvasElement.width = this.imageElement.width; // img width
    this.canvasElement.height = this.imageElement.height; // img height

    this.canvasElement.getContext('2d')
      .drawImage(this.imageElement, 0, 0, this.imageElement.width, this.imageElement.height);
  }
}
