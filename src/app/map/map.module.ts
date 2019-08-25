import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PointComponent } from './point/point.component';


@NgModule({
  declarations: [
    PointComponent,
  ],
  imports: [
    CommonModule,
    MapRoutingModule,
    // material
    AppMaterialModule,
    // form
    FormsModule,
    ReactiveFormsModule,
    // flex
    FlexLayoutModule,
  ]
})
export class MapModule { }
