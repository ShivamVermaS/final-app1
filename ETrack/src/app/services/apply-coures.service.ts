import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppycourseInter } from '../AllInterfaces/appycourse-inter';

@Injectable({
  providedIn: 'root',
})
export class ApplyCouresService {
  property: any;
  private registerUser: string =
    'https://student-course-managment.herokuapp.com/saveapply';
  private loginUser: string =
    'https://student-course-managment.herokuapp.com/apply';
  constructor(private _http: HttpClient) {}
  getLoginData(): Observable<any> {
    return this._http.get<AppycourseInter>(this.loginUser);
  }

  sendLoginInformation(data: any): Observable<any> {
    return this._http.post<AppycourseInter>(this.registerUser, data);
  }
}
