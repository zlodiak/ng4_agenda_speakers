import { Injectable } from '@angular/core';

import { Http, Response, Headers, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class SpeakersService {

  constructor(private http: Http) { };

  getSpeakers(): Observable<any> {
  	let result = this.http.get('../assets/json/speakers.json');
  	return result;
  };    

}
