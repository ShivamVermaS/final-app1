import { CourseServService } from './../../services/course-serv.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ApplyCouresService } from 'src/app/services/apply-coures.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  courseData: any = [];
  courseDetails: any = [];
  Id: number = 0;
  constructor(
    private _courses: CourseServService,
    private _activatedrout: ActivatedRoute,
    private _rout: Router,
    private _applu: ApplyCouresService
  ) {}

  ngOnInit(): void {
    this._activatedrout.url.subscribe((u) => {
      this.Id = this._activatedrout.snapshot.params['id'];
      console.log(this.Id);
      this.getcoursses();
    });
  }
  getcoursses() {
    this._courses.getdata().subscribe((res) => {
      this.courseData = res;
      console.log(this.courseData);
      console.log(this.Id);
      [this.courseDetails] = this.courseData.filter((item: any) => {
        if (item.id == this.Id) {
          return item;
        }
      });
    });
  }
  goToform() {}

  goForCheckCourse(dataId: any) {
    if (localStorage.getItem('email')) {
      this._applu.property = dataId;
      this._rout.navigate(['/applyForm']);
    } else {
      Swal.fire('Please Login');
      this._rout.navigate(['login']);
    }
  }
}
