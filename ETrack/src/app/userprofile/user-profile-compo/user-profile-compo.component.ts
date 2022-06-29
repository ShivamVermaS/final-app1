import { Component, OnInit } from '@angular/core';
import { ApplyCouresService } from 'src/app/services/apply-coures.service';
import { CourseServService } from 'src/app/services/course-serv.service';
import { RegisterServService } from 'src/app/services/register-serv.service';

@Component({
  selector: 'app-user-profile-compo',
  templateUrl: './user-profile-compo.component.html',
  styleUrls: ['./user-profile-compo.component.css'],
})
export class UserProfileCompoComponent implements OnInit {
  data: any;
  userData: any;
  applyCourse: any;
  applyedCourses: string = '';
  constructor(
    private _userService: ApplyCouresService,
    private _loginSer: RegisterServService
  ) {}

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser() {
    if (localStorage.getItem('email')) {
      let logindata = localStorage.getItem('userName');
      this._userService.getLoginData().subscribe((res) => {
        this.data = res.filter((item: any) => {
          return item.firstName == logindata;
        });
        this.applyCourse = this.data.map((item: any) => {
          return item.courseName;
        });
        this.applyedCourses = this.applyCourse.join(',');
       

        this._loginSer.getLoginData().subscribe((res: any) => {
          this.userData = res.find((item: any) => {
            return item.firstName == logindata;
          });
          
        });
      });
    }
  }
}
