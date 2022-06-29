import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  projectcount: number = 0;
  //same process
  accuratecount: number = 0;
  clientcount: number = 0;
  customerfeedback: number = 0;

  //we have created setinterval function with arrow function and
  //and set them in a variable that is projectcountstop.
  projectcountstop: any = setInterval(() => {
    this.projectcount++;
    //we need to stop this at  particular point; will use if condition
    if (this.projectcount == 600) {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }
  }, 10); //10 is milisecond you can control it

  accuratecountstop: any = setInterval(() => {
    this.accuratecount++;
    if (this.accuratecount == 96) {
      clearInterval(this.accuratecountstop);
    }
  }, 10);

  clientcountstop: any = setInterval(() => {
    this.clientcount++;
    if (this.clientcount == 1000) {
      clearInterval(this.clientcountstop)
    }
    
  }, 10);

  customerfeedbackstop: any = setInterval(() => {
    this.customerfeedback++;
    if (this.customerfeedback == 100) {
      clearInterval(this.customerfeedbackstop);
    }
  }, 10);

  constructor() { }

  ngOnInit(): void {
  }

}
