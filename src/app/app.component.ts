import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	private lang: boolean = false;

	ngOnInit() {
		localStorage.removeItem('isEnLang');
	};
  
	private toggleLang() {
		this.lang = !this.lang;

		if(this.lang == true) {
			localStorage.isEnLang = 'true';
		} else {
			localStorage.removeItem('isEnLang');
		}
	};

}
