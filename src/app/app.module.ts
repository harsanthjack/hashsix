import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpHeaders } from '@angular/common/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


// import { QRScanner } from '@ionic-native/qr-scanner/ngx';
//import qrc//ode from "qrcode-generator";

@NgModule({ 
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule,FormsModule,AppRoutingModule,ReactiveFormsModule],
  providers: [
    StatusBar,
    BarcodeScanner,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ], 
  bootstrap: [AppComponent]
})
export class AppModule {}
