import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root"
})
export class CountryService {
  observer: Observer<number>;
  private eventSubject = new Subject<any>();
  subject = new Subject<string>();

  constructor(private _service: HttpClient) { }


  getCountries(val:string) {

    let url = environment.APIURL+"region/"+val;
    return  this._service.get(url);

   }

   getCountriesById(id: any){
    let url = environment.APIURL+"alpha?codes="+id;
    return  this._service.get(url);
   }
}
