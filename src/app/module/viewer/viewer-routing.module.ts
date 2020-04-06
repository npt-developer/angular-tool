import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewerJsonComponent } from './page/viewer-json/viewer-json.component';


const routes: Routes = [
  {
    path: 'json',
    component: ViewerJsonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewerRoutingModule { }
