import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  srcShop = null;
  day: Date = new Date();
  weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  weekday = null;
  hours = null;
  minutes = null;
  constructor() {

   }

  ngOnInit() {
    this.updateTime();
    this.updateImageSource();
  }

  updateTime(){
    this.day = new Date();
    this.weekday = this.weekdays[this.day.getDay()];
    this.hours = this.day.getHours();
    this.minutes = this.day.getMinutes();
    console.log("Time: " + this.hours + ":" + this.minutes + " Day of week: " + this.weekday);
  }

  updateImageSource(){
    if(this.checkIfShopIsOpened()){
      this.srcShop = './assets/Media/Shop/shop_day.png';
    } else{
      this.srcShop = './assets/Media/Shop/shop_night.png';
    }
  }

  checkIfShopIsOpened(){
    if(this.weekday == "Monday" ||
        this.weekday == "Tuesday" ||
        this.weekday == "Wednesday" ||
        this.weekday == "Thursday" ||
        this.weekday == "Friday"){
          // Normal day
          // from 9-18
          var start = 9;
          var stop = 18;
          if(this.hours >= start && this.hours < stop){
            //open
            return true;
          } else {
            //closed
            return false;
          }
        } else if(this.weekday == "Saturday"){
          // Saturday
          // from 9-13:30
          var start = 9;
          var stop = 13;
          if(this.hours >= start && this.hours < stop){
            //open
            return true;
          } else if(this.hours == stop){
            if(this.minutes < 30){
              //open
              return true;
            } else{
              //closed
              return false;
            }
          } else{
            //closed
            return false;
          }
        } else if(this.weekday == "Sunday"){
          // Sunday
          // from 9-13:00
          var start = 9;
          var stop = 13;
          if(this.hours >= start && this.hours < stop){
            //open
            return true;
          } else{
            //closed
            return false;
          }
        }
    return true;
  }
}
