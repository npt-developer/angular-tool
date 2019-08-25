import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';

import { HighlightModule } from 'ngx-highlightjs';
// import xml from 'highlight.js/lib/languages/xml';
// import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';
// qr code
import { QRCodeModule } from 'angular2-qrcode';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CopyToClipboardService } from '@services/CopyToClipboard.service';

import { MenuComponent } from './menu/menu.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    QrCodeComponent, // qr code generate
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // routing
    BrowserAnimationsModule, // animation
    FormsModule, // form
    ReactiveFormsModule,
    
    // material
    AppMaterialModule,
    // flex
    FlexLayoutModule,
    // multilevel menu
    NgMaterialMultilevelMenuModule,
    // highlight
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    // qr code
    QRCodeModule,
  ],
  exports: [
  ],
  providers: [
    {provide: Window, useValue: window }, // add window, in service: private _window: Window
    CopyToClipboardService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
