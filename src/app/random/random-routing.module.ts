import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UuidComponent } from './uuid/uuid.component';


const routes: Routes = [
  {
    path: 'uuid',
    component: UuidComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandomRoutingModule { }
