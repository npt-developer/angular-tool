import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandomRoutingModule } from './random-routing.module';
import { UuidComponent } from './uuid/uuid.component';
import { AppMaterialModule } from '../app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    UuidComponent,
  ],
  imports: [
    CommonModule,
    RandomRoutingModule,
    // material
    AppMaterialModule,
    // form
    FormsModule,
    ReactiveFormsModule,
    // flex
    FlexLayoutModule,
  ]
})
export class RandomModule { }
