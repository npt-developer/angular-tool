import { NgModule } from '@angular/core';

import { QrCodeRoutingModule } from './qr-code-routing.module';
import { QrCodeComponent } from './qr-code.component';
import { SharedModule } from 'src/app/shared/shared.module';
// qr code
import { QRCodeModule as QRCodeModuleLib } from 'angular2-qrcode';


@NgModule({
  declarations: [QrCodeComponent],
  imports: [
    QrCodeRoutingModule,
    SharedModule,
    // angular2-qrcode
    QRCodeModuleLib
  ]
})
export class QrCodeModule { }
