import { RegistrationInter } from './../AllInterfaces/registration-inter';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RegisterServService {

  private registerUser : string = "https://student-course-managment.herokuapp.com/saveuser";
  private loginUser : string = "https://student-course-managment.herokuapp.com/users";
  constructor(private http:HttpClient) { }

  getLoginData(): Observable<any> {
    return this.http.get<RegistrationInter>(this.loginUser);
  }

  sendLoginInformation(data: any): Observable<any> {
    return this.http.post<RegistrationInter>(this.registerUser, data);
  }
}
