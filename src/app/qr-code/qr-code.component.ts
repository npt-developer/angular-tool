import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { saveAs } from 'file-saver';

interface QrCodeOption {
  value?: string; // default '' // data qr_code
	size?: number; // default 100 // height/width of your QR Code component
	level?: string; // default 'L' // QR Correction level ('L', 'M', 'Q', 'H')
	background?: string; // default  'white'; // The color for the background
	backgroundAlpha?: number; // default 1.0; // The opacity of the background
	foreground?: string // default 'black'; // The color for the foreground
	foregroundAlpha?: number; // default   1.0; //	The opacity of the foreground
	mime: string; // default  'image/png'; // The mime type for the output image
	padding: number; // default   = null; //The padding around the QR Code
	canvas: boolean; // default  	false; //Will output a canvas element if true
}

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css'],
})
export class QrCodeComponent implements OnInit {

  formGroup: FormGroup;
  data: string = '';
  qrCodeOption: QrCodeOption = {
    value: '',
    size: 150,
    mime: 'image/png',
    padding: 10,
    canvas: true, // using canvas to blod => download
  };

  constructor(
    private formBuilder: FormBuilder,
    @Inject(DOCUMENT) private _document: Document,
    ) { }

  ngOnInit() {
    this.initForm();
  }

  downloadQrCode = () => {
    const canvas = this._document.querySelector('#qrCode canvas') as HTMLCanvasElement;
    const downloadFilename = this.formGroup.controls.filename.value || this.qrCodeOption;
    canvas.toBlob((blob) => {
      saveAs(blob, downloadFilename);
    }, this.qrCodeOption.mime);
  }

  initForm = () => {
    this.formGroup = this.formBuilder.group({
      data: [this.qrCodeOption.value],
      size: [this.qrCodeOption.size],
      filename: ['qr-code'],
    });
  }
}
