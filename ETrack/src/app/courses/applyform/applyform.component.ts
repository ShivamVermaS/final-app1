import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppycourseInter } from 'src/app/AllInterfaces/appycourse-inter';
import { ApplyCouresService } from 'src/app/services/apply-coures.service';

@Component({
  selector: 'app-applyform',
  templateUrl: './applyform.component.html',
  styleUrls: ['./applyform.component.css'],
})
export class ApplyformComponent implements OnInit {
  data: any;
  imageSrc: string = '';
  postData: AppycourseInter[] = [];
  // url:string = 'http://localhost:1234/loginData'
  constructor(private register: ApplyCouresService) {}
  CourseData: any;
  signupcourse: any;
  ngOnInit(): void {
    this.CourseData = this.register.property;
    console.log(this.CourseData);

    this.signupcourse = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z A-Z]+$'),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z A-Z]+$'),
      ]),
      courseId: new FormControl(this.CourseData.id),
      duration: new FormControl(this.CourseData.duration),
      courseName: new FormControl(this.CourseData.title),
      fees: new FormControl(this.CourseData.fee),
    });
  }

  sendSignUpData() {
    this.data = this.signupcourse.value;
    this.register
      .sendLoginInformation(this.data)
      .subscribe((res: AppycourseInter[]) => {
        this.postData = res;
        console.log(this.postData);
        this.signupcourse.reset();
      });
    alert('Your Resonse Has been Recorded');
  }

  get firstName() {
    return this.signupcourse.get('firstName');
  }

  get lastName() {
    return this.signupcourse.get('lastName');
  }

  get password() {
    return this.signupcourse.get('password');
  }

  get confirmPassword() {
    return this.signupcourse.get('confirmPassword');
  }

  get email() {
    return this.signupcourse.get('email');
  }

  get courseName() {
    return this.signupcourse.get('courseName');
  }

  get feedback() {
    return this.signupcourse.get('feedback');
  }
}
