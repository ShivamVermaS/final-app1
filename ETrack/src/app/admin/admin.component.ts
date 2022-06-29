import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminloginService } from '../services/adminlogin.service';
import { CourseServService } from '../services/course-serv.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  adminEnterData: any;
  getLogin: any;
  matchData: any;
  courseData: any = [];
  flag: boolean = false;
  result: any;
  constructor(
    private loginAdmin: AdminloginService,
    private _route: Router,
    private _courses: CourseServService,
    private _activatedRoute: ActivatedRoute
  ) {}
  adminLogin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z @ A-Z @ . 0-9]+$'),
    ]),
    Password: new FormControl('', [Validators.required]),
  });
  getFormValue() {
    this.adminEnterData = this.adminLogin.value;
    console.log(this.adminLogin.value.email);
    this.loginAdmin.getdata().subscribe((res: any) => {
      let result = res.find((item: any) => {
        console.log(item);
        return (
          item.email == this.adminLogin.value.email &&
          item.password == this.adminLogin.value.Password
        );
      });
      console.log(result);
      if (result) {
        this.flag = true;
        localStorage.setItem('email', result.email);
        Swal.fire('SuccessFully login');
      } else {
        alert('User Not Found');
      }
    });
  }

  ngOnInit(): void {
    this.getcoursses();
  }
  getcoursses() {
    this._courses.getdata().subscribe((res) => {
      this.courseData = res;
      console.log(this.courseData);
    });
  }
  deletedata(id:number){
    console.log(id)

    this._courses.deletedata(id).subscribe((res:any)=>{
window.alert('delete')
    })

  }
}
