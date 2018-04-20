import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { wethermap } from './weathermap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class WeatherMapService {
    url : string = 'http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22';
    test;
    constructor(
        private http: HttpClient) { }

  getWetherdata(): Observable<wethermap[]>
  {
    
    return this.http.get<wethermap[]>(this.url).map(data => this.test=data, console.log(this.test) );
  }

}