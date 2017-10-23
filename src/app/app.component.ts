import { Component, OnInit } from '@angular/core';

import { GlobalVarsService } from './services/global-vars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	private isEnLang: boolean;

	constructor(private globalVarsService: GlobalVarsService) {};

	ngOnInit() {
		this.checkLang();
	};
  
	private toggleLang() {
		this.isEnLang = !this.isEnLang;
		this.globalVarsService.setLangState(this.isEnLang);
	};

  private checkLang(): void {
    this.globalVarsService.getLangState().subscribe(data => setTimeout(() => {
      console.log('subscribe', data);
      this.isEnLang = data;
    }, 0));     
  }; 

}
