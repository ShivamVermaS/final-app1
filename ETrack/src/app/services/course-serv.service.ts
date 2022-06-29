import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseServService {
  constructor(private _http: HttpClient) {}
  url="https://student-course-managment.herokuapp.com/courses"
  getdata() {
    return this._http.get(
      'https://student-course-managment.herokuapp.com/courses'
    );
  }
  deletedata(id:number) {
    return this._http.delete(
      this.url+"/"+id)
  }
}
