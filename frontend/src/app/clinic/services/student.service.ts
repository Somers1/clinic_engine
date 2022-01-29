import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Student} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  postStudent(student:Student){
    return this.http.post<Student>(`${environment.apiUrl}api/clinic/student/`, student)
  }
}
