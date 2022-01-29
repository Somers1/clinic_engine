import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {School} from "../models/school.model";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) {
  }

  postSchool(school:School){
    return this.http.post<School>(`${environment.apiUrl}api/clinic/school/`, school)
  }
}
