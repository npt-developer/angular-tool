import { NgModule } from '@angular/core';

import { MapRoutingModule } from './map-routing.module';
import { PointComponent } from './page/point/point.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PointComponent,
  ],
  imports: [
    MapRoutingModule,
    SharedModule,
  ]
})
export class MapModule { }
