import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxJsonViewModule } from '@twp0217/ngx-json-view';

import { ViewerRoutingModule } from './viewer-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { JsonComponent } from './json/json.component';



@NgModule({
  declarations: [
    JsonComponent,
  ],
  imports: [
    CommonModule,
    ViewerRoutingModule,
    // material
    AppMaterialModule,
    // form
    FormsModule,
    ReactiveFormsModule,
    // flex
    FlexLayoutModule,
    // json viewer
    NgxJsonViewModule,
  ]
})
export class ViewerModule { }
