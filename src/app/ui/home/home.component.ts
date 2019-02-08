import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from "ngx-facebook";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FacebookService) {
    let initParams: InitParams = {
      xfbml: true,
      version: "v2.8"
    };

    fb.init(initParams);
   }

  ngOnInit() {
  }

}
