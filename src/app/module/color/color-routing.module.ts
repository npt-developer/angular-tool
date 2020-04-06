import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorListComponent } from './page/color-list/color-list.component';
import { ColorComponent } from './color.component';
import { ColorPickerFromImageComponent } from './page/color-picker/color-picker-from-image/color-picker-from-image.component';
import { ColorPickerHtmlComponent } from './page/color-picker/color-picker-html/color-picker-html.component';


const routes: Routes = [
  {
    path: '',
    component: ColorComponent,
  },
  {
    path: 'list',
    component: ColorListComponent,
  },
  {
    path: 'picker',
    children: [
      {
        path: 'html',
        component: ColorPickerHtmlComponent,
      },
      {
        path: 'from-image',
        component: ColorPickerFromImageComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorRoutingModule { }
