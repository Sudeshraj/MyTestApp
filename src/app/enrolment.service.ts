import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { User } from './user';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {

  _url='http://portal.pensions.gov.lk:8091/pension-assignment-api/api/TechnicalAssignment/savePensionerDetails';

  constructor(private _http : HttpClient) { }

  // enroll(user : User){
  //   return this._http.post<any>(this._url,user);
  // }

  enroll(user : User){
    return this._http.post<any>(this._url,user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }

}
