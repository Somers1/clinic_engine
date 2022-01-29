import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GenericPaginatedResponse} from "../models/paginator.model";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor(private http: HttpClient) { }

  getPage(baseUrl:string, pageSize:number, pageNumber:number, filters:string[] = []){
    let url = `${baseUrl}?page_size=${pageSize}&page=${pageNumber}`
    filters.forEach(filter => url += `&${filter}`)
    return this.http.get<GenericPaginatedResponse>(url)
  }
}
