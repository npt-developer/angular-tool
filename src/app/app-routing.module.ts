import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'color',
    loadChildren: () => import('./module/color/color.module').then(m => m.ColorModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./module/map/map.module').then(m => m.MapModule),
  },
  {
    path: 'random',
    loadChildren: () => import('./module/random/random.module').then(m => m.RandomModule),
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./module/qr-code/qr-code.module').then(m => m.QrCodeModule),
  },
  {
    path: 'viewer',
    loadChildren: () => import('./module/viewer/viewer.module').then(m => m.ViewerModule),
  },
  {
    path: 'image',
    loadChildren: () => import('./module/image/image.module').then(m => m.ImageModule),
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