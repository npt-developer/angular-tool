import { NgModule } from '@angular/core';

import { ColorRoutingModule } from './color-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ColorComponent } from './color.component';
import { ColorListComponent } from './page/color-list/color-list.component';
import { ColorPickerFromImageComponent } from './page/color-picker/color-picker-from-image/color-picker-from-image.component';
import { ColorPickerHtmlComponent } from './page/color-picker/color-picker-html/color-picker-html.component';


@NgModule({
  declarations: [ColorComponent, ColorListComponent, ColorPickerFromImageComponent, ColorPickerHtmlComponent],
  imports: [
    ColorRoutingModule,
    SharedModule,
  ]
})
export class ColorModule { }
