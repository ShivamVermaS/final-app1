import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  constructor(private _http:HttpClient) { }
  getdata() {
    return this._http.get(
      'https://student-course-managment.herokuapp.com/admin'
    );
  }
}
