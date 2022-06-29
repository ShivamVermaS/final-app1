import { Router } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';
import { CourseServService } from 'src/app/services/course-serv.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  courselist: any;
  status: boolean = false;
  userStatus: boolean = false;
  constructor(
    private route: Router,
    private _course: CourseServService,
    private _route: Router
  ) {}

  // onSearchSubmit(search: string) {
  //   const url = '/' + search.toLowerCase();
  //   this.route.navigateByUrl(url);
  // }
  ngOnInit(): void {
    this.getcourses();
  }

  ngDoCheck() {
    if (localStorage.getItem('email')) {
      this.userStatus = true;
    } else {
      this.userStatus = false;
    }
  }
  getcourses() {
    this._course.getdata().subscribe((res) => {
      this.courselist = res;
    });
  }
  deleteliveStatus() {
    Swal.fire({
      title: 'warning!',
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonText: 'Cancel',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout Me!',
    }).then((res) => {
      if (res.isConfirmed) {
        localStorage.clear();
        this._route.navigateByUrl('auth/login');
        Swal.fire({
          title: 'Logout Successfully!',
          text: 'Thanks',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      } else {
        Swal.fire({
          title: 'You are still logged in',
          text: 'Thanks',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    });
  }
  checklivestatus() {
    this.status = localStorage.getItem('email') === null;
    return this.status;
  }
}
