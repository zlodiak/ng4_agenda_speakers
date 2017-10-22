import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class AgendaService {

  constructor(private http: Http) { };

  getAgenda(): Observable<any> {
  	let result = this.http.get('../assets/json/agenda.json');
  	return result;
  } 

}
