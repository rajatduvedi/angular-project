import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Data } from './data';
@Injectable()
export class DataService{
  private dataurl= './assets/dataj.json';
  constructor(private http: Http){}
  getData(): Observable<Data[]> {
      return this.http.get(this.dataurl)
              .map((response : Response)=> <Data[]> response.json());
              // .do(resData => console.log(JSON.stringify(resData)));
  }

}
