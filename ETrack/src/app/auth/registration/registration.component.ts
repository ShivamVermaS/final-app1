import { RegistrationInter } from './../../AllInterfaces/registration-inter';
import { RegisterServService } from './../../services/register-serv.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  data: any;
  imageSrc: string = '';
  postData: RegistrationInter[] = [];
  // url:string = 'http://localhost:1234/loginData'
  constructor(private register: RegisterServService) {}

  ngOnInit(): void {}

  signup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z A-Z]+$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(20),
    ]),

    email: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-z @ A-Z @ . 0-9]+$'),
    ]),
    mobile_No: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]+$'),
    ]),
    gender: new FormControl('', [Validators.required]),
  });

  sendSignUpData() {
    this.data = this.signup.value;
    console.log(this.data);
    this.register
      .sendLoginInformation(this.data)
      .subscribe((res: RegistrationInter[]) => {
        this.postData = res;
        console.log(this.postData);
        this.signup.reset();
      });
    alert('Your Resonse Has been Recorded');
  }

  get firstName() {
    return this.signup.get('firstName');
  }

  get lastName() {
    return this.signup.get('lastName');
  }

  get password() {
    return this.signup.get('password');
  }

  get email() {
    return this.signup.get('email');
  }

  get mobile_No() {
    return this.signup.get('contactNo');
  }
}
