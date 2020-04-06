import { NgModule } from '@angular/core';

import { RandomRoutingModule } from './random-routing.module';
import { UuidComponent } from './page/uuid/uuid.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UuidComponent,
  ],
  imports: [
    RandomRoutingModule,
    SharedModule,
  ]
})
export class RandomModule { }
