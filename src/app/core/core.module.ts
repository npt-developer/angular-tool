import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyToClipboardService } from 'src/app/core/service/CopyToClipboard.service';
import { WindowService } from './service/window.service';



@NgModule({
  declarations: [],
  providers: [
    WindowService,
    CopyToClipboardService,
  ],
  imports: [
    CommonModule,
  ]
})
export class CoreModule {

  // constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error(
  //       'CoreModule is already loaded. Import it in the AppModule only');
  //   }
  // }

  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: CoreModule,
  //     providers: []
  //   };
  // }
}
