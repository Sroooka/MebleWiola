import { Component } from '@angular/core';
import { FacebookService, InitParams } from "ngx-facebook";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meble Wiola';
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      xfbml: true,
      version: "v2.8"
    };

    fb.init(initParams);
   }

   ngOnInit(): void {
    this.galleryOptions = [
      {
          width: '600px',
          height: '400px',
          thumbnailsColumns: 4,
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

  this.galleryImages = [
      {
          small: 'assets/1-small.jpg',
          medium: 'assets/1-medium.jpg',
          big: 'assets/1-big.jpg'
      },
      {
          small: 'assets/2-small.jpg',
          medium: 'assets/2-medium.jpg',
          big: 'assets/2-big.jpg'
      },
      {
          small: 'assets/3-small.jpg',
          medium: 'assets/3-medium.jpg',
          big: 'assets/3-big.jpg'
      }
  ];
   }
}