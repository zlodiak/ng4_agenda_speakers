import { Injectable } from '@angular/core';
import { Response, Headers, URLSearchParams } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GlobalVarsService {

	private isEnLang = new BehaviorSubject(false);

  constructor() { }

  getLangState(): Observable<boolean> {
    console.log('this.isEnLang', this.isEnLang);
  	return this.isEnLang;
  };  

  setLangState(state): void {
    console.log('set isEnLang', state);
    this.isEnLang.next(state);
  };   

}
