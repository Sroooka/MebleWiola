import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  srcDrewmax = './assets/Media/Offer/drewmaxlogo.png';
  srcGala = './assets/Media/Offer/galalogo.png';
  srcHalmar = './assets/Media/Offer/halmarlogo.png';
  srcKliber = './assets/Media/Offer/kliberlogo.png';
  srcKolo = './assets/Media/Offer/kolologo.png';
  srcMerwina = './assets/Media/Offer/merwinalogo.png';

  constructor( ) { }

  ngOnInit() {
  }

  highlight(image:any, name:string) :void{
    switch(name){
      case "drewmax":
        this.srcDrewmax='./assets/Media/Offer/drewmaxphoto.png';
        break;
      case "gala":
        this.srcGala='./assets/Media/Offer/galaphoto.png';
        break;
      case "halmar":
        this.srcHalmar='./assets/Media/Offer/halmarphoto.png';
        break;
      case "kliber":
        this.srcKliber='./assets/Media/Offer/kliberphoto.png';
        break;
      case "kolo":
        this.srcKolo='./assets/Media/Offer/kolophoto.png';
        break;
      case "merwina":
        this.srcMerwina='./assets/Media/Offer/merwinaphoto.png';
        break;
      default:
        break;
    }
  }

  unhighlight(image:any, name:string) : void{
    switch(name){
      case "drewmax":
        this.srcDrewmax='./assets/Media/Offer/drewmaxlogo.png';
        break;
      case "gala":
        this.srcGala='./assets/Media/Offer/galalogo.png';
        break;
      case "halmar":
        this.srcHalmar='./assets/Media/Offer/halmarlogo.png';
        break;
      case "kliber":
        this.srcKliber='./assets/Media/Offer/kliberlogo.png';
        break;
      case "kolo":
        this.srcKolo='./assets/Media/Offer/kolologo.png';
        break;
      case "merwina":
        this.srcMerwina='./assets/Media/Offer/merwinalogo.png';
        break;
      default:
        break;
    }
  }
}