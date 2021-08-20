import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-countdown-area',
  templateUrl: './countdown-area.component.html',
  styleUrls: ['./countdown-area.component.css']
})
export class CountdownAreaComponent implements OnInit {

  constructor() { 
    let varTimes: {days: number, hours: number, minutes: number, seconds: number} = {
      days: 10,
      hours: 23,
      minutes: 59,
      seconds: 59
    };

    var time: number = 1000; //How many time in miliseconds is one second
    

    function start() {
      setInterval( () => {
        timer();

      }, time);
    }

    function timer() {
      varTimes.seconds--;
      let tempSeconds = varTimes.seconds.toString();

      (<HTMLParagraphElement>document.getElementById("seconds_id") ).innerHTML = tempSeconds;

      if(varTimes.seconds == 0) {
        varTimes.seconds = 59;

        varTimes.minutes--;
        let tempMinutes = varTimes.minutes.toString();

        ( <HTMLParagraphElement>document.getElementById("minutes_id") ).innerHTML = tempMinutes;

        if(varTimes.minutes == 0) {
          varTimes.minutes = 59;

          varTimes.hours--;
          let tempHours = varTimes.hours.toString();

          ( <HTMLParagraphElement>document.getElementById("hours_id") ).innerHTML = tempHours;

          if(varTimes.hours == 0) {
            varTimes.hours = 23;

            varTimes.days--;
            let tempDays = varTimes.days.toString();

            ( <HTMLParagraphElement>document.getElementById("days_id") ).innerHTML = tempDays;

            if(varTimes.days == 0) {
              varTimes.days = 10;
            }

          }
        }
      }

    }

    start();

  }

  ngOnInit(): void {
  }

}
