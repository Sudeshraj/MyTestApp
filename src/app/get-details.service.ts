import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {

  _url=' http://portal.pensions.gov.lk:8091/pension-assignment-api/api/TechnicalAssignment/getAllUserProfiles';

  constructor(private _http : HttpClient) { }

  getAll(){
    return this._http.get<any>(this._url)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
}
