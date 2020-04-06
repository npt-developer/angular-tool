import { NgModule } from '@angular/core';
import { NgxJsonViewModule } from '@twp0217/ngx-json-view';

import { ViewerRoutingModule } from './viewer-routing.module';
import { ViewerJsonComponent } from './page/viewer-json/viewer-json.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ViewerJsonComponent,
  ],
  imports: [
    ViewerRoutingModule,
    SharedModule,
    // json viewer
    NgxJsonViewModule,
  ]
})
export class ViewerModule { }
