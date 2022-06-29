import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { CourseServService } from '../services/course-serv.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css'],
})
export class HomeContentComponent implements OnInit {
  courseData: any = [];

  constructor(private _courses: CourseServService,private _route:Router,private _activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.getcoursses();
  }
  getcoursses() {

    this._courses.getdata().subscribe((res) => {
      this.courseData = res;
      console.log(this.courseData);
    });
  }
 
}
