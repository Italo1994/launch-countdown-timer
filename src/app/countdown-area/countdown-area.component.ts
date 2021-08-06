import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-area',
  templateUrl: './countdown-area.component.html',
  styleUrls: ['./countdown-area.component.css']
})
export class CountdownAreaComponent implements OnInit {

  constructor() { 
    let days: number = 80,
        hours: number = 23,
        minutes: number = 59,
        seconds: number = 59;

    var time: number = 1000; //How many time in miliseconds is one second
    

    function start() {
      setInterval( () => {
        timer();

      }, time);
    }

    function timer() {
      seconds--;
       

      if(seconds == 0) {
        seconds = 59;
        minutes--;

        if(minutes == 0) {
          minutes = 59;
          hours--;

          if(hours == 0) {
            hours = 23;
            days--;

            if(days == 0) {
              
            }

          }
        }
      }
    }

  }

  ngOnInit(): void {
  }

}
