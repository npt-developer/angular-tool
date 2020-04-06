import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputFileImageComponent } from './component/input-file-image/input-file-image.component';
import { ColorUtilService } from './util/color-util.service';
import { Base64UtilService } from './util/base64-util.service';



@NgModule({
  declarations: [
    InputFileImageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule,
    FlexLayoutModule,

    InputFileImageComponent,
  ],
  providers: [
    ColorUtilService,
    Base64UtilService,
  ]
})
export class SharedModule { }
