import { NgModule } from '@angular/core';

import { ImageRoutingModule } from './image-routing.module';
// component
import { ImageBase64Component } from './page/base64/base64.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageGeoComponent } from './page/geo/geo.component';


@NgModule({
  declarations: [
    ImageBase64Component,
    ImageGeoComponent,
  ],
  imports: [
    ImageRoutingModule,
    SharedModule,
  ]
})
export class ImageModule { }
