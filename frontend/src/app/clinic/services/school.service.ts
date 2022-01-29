import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../models/school.model";
import {environment} from "../../../environments/environment";
import {ServerDataSource} from "ng2-smart-table";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) {
  }

  postSchool(school:School){
    return this.http.post<School>(`${environment.apiUrl}api/clinic/school/`, school)
  }
  getSchoolServerSource(){
    return new ServerDataSource(this.http, {
      endPoint: `${environment.apiUrl}api/clinic/school/`,
      dataKey: 'results',
      totalKey: 'count',
      pagerPageKey: 'page',
      pagerLimitKey: 'page_size',
      sortFieldKey: 'ordering',
      filterFieldKey: 'search_#field#',
    })
  }
}
