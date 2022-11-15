import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiNameSpace } from '../model/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService<T> {

  constructor(
    private http: HttpClient,
    
  ) { }

  postService(paramsReq: ApiNameSpace.Params): Observable<T> {
    const { url, params, body } = paramsReq;
    const options = {
      params
    }
    return this.http.post<T>(url, body, options).pipe(map(res => res),
    catchError(this.handerError));
  }

  getService(paramsReq: ApiNameSpace.Params): Observable<T> {
    const { url, params } = paramsReq;
    const options = {
      params
    }

    return this.http.get<T>(url, options).pipe(map(res => res),
    catchError(this.handerError));
  }

  private handerError(err: HttpErrorResponse) {
    console.log(err.error)
    return throwError(() => err);
  }

}
