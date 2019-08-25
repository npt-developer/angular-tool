import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageBase64Component } from './base64/base64.component';


const routes: Routes = [
  {
    path: 'base64',
    component: ImageBase64Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageRoutingModule { }
