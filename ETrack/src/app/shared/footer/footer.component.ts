import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseServService } from 'src/app/services/course-serv.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  courseData: any;
  list2: any[] = [];

  constructor(
    private _courses: CourseServService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getcoursses();
  }
  getcoursses() {
    this._courses.getdata().subscribe((res) => {
      this.courseData = res;

      this.list2 = this.courseData.splice(10, 17);
    });
  }
}
