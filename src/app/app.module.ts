import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

import { HighlightModule } from 'ngx-highlightjs';
// import xml from 'highlight.js/lib/languages/xml';
// import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MenuComponent } from './component/menu/menu.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    // {name: 'scss', func: scss},
    // {name: 'xml', func: xml}
  ];
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent, // menu
    AdminLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routing
    BrowserAnimationsModule, // animation

    CoreModule,
    // share
    SharedModule,
    

    // multilevel menu
    NgMaterialMultilevelMenuModule,
    // highlight
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
