import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../models/school.model";
import {environment} from "../../../environments/environment";
import {ServerDataSource} from "ng2-smart-table";
import {Student} from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  constructor(private http: HttpClient) {
  }

  getSchoolServerSource() {
    return new ServerDataSource(this.http, {
      endPoint: `${environment.apiUrl}api/clinic/paginated-school/`,
      dataKey: 'results',
      totalKey: 'count',
      pagerPageKey: 'page',
      pagerLimitKey: 'page_size',
      sortFieldKey: 'ordering',
      filterFieldKey: 'search_#field#',
    })
  }

  postSchool(school: School) {
    return this.http.post<School>(`${environment.apiUrl}api/clinic/school/`, school)
  }

  postStudent(student: Student) {
    return this.http.post<Student>(`${environment.apiUrl}api/clinic/student/`, student)
  }

  getSchools(){
    return this.http.get<School[]>(`${environment.apiUrl}api/clinic/school/`)
  }
}