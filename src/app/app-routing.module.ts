import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './ui/page-not-found/page-not-found.component';
import {HomeComponent} from './ui/home/home.component';
import {RealisationsComponent} from './ui/realisations/realisations.component';
import {OfferComponent} from './ui/offer/offer.component';
import {ContactComponent} from './ui/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'realizacje', component: RealisationsComponent},
  {path: 'oferta', component: OfferComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }