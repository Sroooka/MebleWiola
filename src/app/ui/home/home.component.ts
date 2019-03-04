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
      this.srcShop = './assets/Media/Shop/shop_day.jpg';
    } else{
      this.srcShop = './assets/Media/Shop/shop_day.jpg';
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

  getOpenedMessage(){
    this.updateTime();
    var message = "Czas do zamknięcia sklepu ";
    this.day = new Date();
    this.weekday = this.weekdays[this.day.getDay()];
    this.hours = this.day.getHours();
    this.minutes = this.day.getMinutes();

    var hoursLeft = 0;
    var minLeft = 0;

    if(this.weekday == "Monday" ||
        this.weekday == "Tuesday" ||
        this.weekday == "Wednesday" ||
        this.weekday == "Thursday" ||
        this.weekday == "Friday"){
          // Normal day
          // from 9-18

          hoursLeft = 18 - this.hours - 1;
          minLeft = (60 - this.minutes) % 60;
          if(minLeft == 0) hoursLeft++;
          
        } else if(this.weekday == "Saturday"){
          // Saturday
          // from 9-13:30
          hoursLeft = 13 - this.hours - 1;
          minLeft = (60 - this.minutes) % 60;
          minLeft+= 30;
          if(minLeft>=60) {
            hoursLeft++;
            minLeft-= 30;
          }
          if(minLeft == 0) hoursLeft++;
        } else if(this.weekday == "Sunday"){
          // Sunday
          // from 10-13:00
          hoursLeft = 13 - this.hours - 1;
          minLeft = (60 - this.minutes) % 60;
          if(minLeft == 0) hoursLeft++;
        }
        
        message = message + hoursLeft + ":";
        if(minLeft < 10) message = message + "0";
        message = message + minLeft + ". Zapraszamy!";
    return message;
  }

  getClosedMessage(){
    this.updateTime();
    var message = "Sklep zamknięty, zapraszamy jutro o godzinie ";
    var nextWeekday = this.weekdays[(this.day.getDay() + 1) % 7];
    if(nextWeekday == "Sunday"){
      message = message + "10:00!";
    } else{
      message = message + "9:00!"
    }
    return message;
  }
}
