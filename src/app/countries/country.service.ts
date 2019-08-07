import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn : 'root'
})

export class CountryService {

  constructor(private _service: HttpClient) { }


  getCountries (val: string): Observable<any> {

    const url = environment.APIURL + 'region/' + val;
    return  this._service.get(url);

   }
  getCountriesById(id: any): Observable<any>  {
    const url = environment.APIURL + 'alpha?codes=' + id;
    return  this._service.get(url);
   }
}
