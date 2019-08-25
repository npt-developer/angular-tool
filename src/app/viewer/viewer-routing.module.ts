import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JsonComponent } from './json/json.component';


const routes: Routes = [
  {
    path: 'json',
    component: JsonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule { }
