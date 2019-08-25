import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointComponent } from './point/point.component';


const routes: Routes = [
  {
    path: 'point',
    component: PointComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapRoutingModule { }
