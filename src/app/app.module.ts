import {NgModule} from '@angular/core';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AuthModule} from "./auth/auth.module";
import {HomeModule} from "./pages/home.module";
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoPageFoundComponent} from "./no-page-found/no-page-found.component";
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [AppComponent, NoPageFoundComponent],
  imports: [
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AuthModule,
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
