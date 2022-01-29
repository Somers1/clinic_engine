import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token: string = '';
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = <string>localStorage.getItem('token');
    if (!this.token) {
      return next.handle(req);
    }
    if (req.params.has('ordering')) {
      let newParams = req.params;
      if (req.params.get('_order') === 'DESC') {
          newParams = req.params.set('ordering', '-'.concat(<string>req.params.get('ordering')));
        }
      newParams = newParams.delete('_order');
      req = req.clone({
      params: newParams,
    });
    }
    for (const key of req.params.keys()) {
        if (key.includes('search_')) {
          const field = key.replace('search_', '');
           let newParams = req.params;
           newParams = req.params.set('search', <string>req.params.get('search_' + field));
           newParams = newParams.set('only', field);
           newParams = newParams.delete('search_' + field);
          req = req.clone({
            params: newParams,
          });
        }
    }
    req = req.clone({
      setHeaders: {
        'Accept'       : 'application/json',
        "Access-Control-Allow-Origin": "*",
        'Authorization': `Token ${this.token}`,
      },
    });
    console.log(req)
    return next.handle(req);
  }
}
