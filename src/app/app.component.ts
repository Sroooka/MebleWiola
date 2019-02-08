import { Component } from '@angular/core';
import { FacebookService, InitParams } from "ngx-facebook";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meble Wiola';

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      xfbml: true,
      version: "v2.8"
    };

    fb.init(initParams);
   }
}