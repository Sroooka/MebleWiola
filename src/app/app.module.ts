import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
//import { HomeComponent } from './ui/home/home.component';
//import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
//import { RealisationsComponent } from './ui/realisations/realisations.component';
//import { OfferComponent } from './ui/offer/offer.component';
//import { ContactComponent } from './ui/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    //HomeComponent,
    //PageNotFoundComponent,
    //RealisationsComponent,
    //OfferComponent,
    //ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


