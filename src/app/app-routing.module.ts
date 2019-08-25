import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QrCodeComponent } from './qr-code/qr-code.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'map',
    loadChildren: './map/map.module#MapModule'
  },
  {
    path: 'random',
    loadChildren: './random/random.module#RandomModule'
  },
  {
    path: 'qr-code',
    component: QrCodeComponent,
  },
  {
    path: 'viewer',
    loadChildren: './viewer/viewer.module#ViewerModule'
  },
  {
    path: 'image',
    loadChildren: './image/image.module#ImageModule'
  }
];

const routesConfig: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    RouterModule.forRoot(routes, routesConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}