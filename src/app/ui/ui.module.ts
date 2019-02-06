import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { OfferComponent } from './offer/offer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent, HomeComponent, RealisationsComponent, OfferComponent, ContactComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, PageNotFoundComponent, HomeComponent, RealisationsComponent, OfferComponent, ContactComponent]
})
export class UiModule { }
