import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageRoutingModule } from './image-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

// component
import { ImageBase64Component } from './base64/base64.component';


@NgModule({
  declarations: [
    ImageBase64Component,
  ],
  imports: [
    CommonModule,
    ImageRoutingModule,
    // material
    AppMaterialModule,
    // form
    FormsModule,
    ReactiveFormsModule,
    // flex
    FlexLayoutModule,
  ]
})
export class ImageModule { }
