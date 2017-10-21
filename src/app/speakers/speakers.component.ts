import { Component, OnInit } from '@angular/core';

import { SpeakersService } from '../services/speakers.service';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

	private speakersObj: any[] = [];
	private speakers: any[] = [];
  
  constructor(private speakersService: SpeakersService) { };

	ngOnInit() {
		this.getSpeakers();
	}  

  private getSpeakers(): void {
  	console.log('g s');
    this.speakersService
        .getSpeakers()
        .subscribe(data => {     
        						let response = JSON.parse(data._body);
        						console.log(response);                                                          

										//this.agendaObj = response.values;
										//console.log(this.agendaObj);  

                    /*let this_ = this;
										Object.keys(this.agendaObj).map(function(val, key) {
										  this_.agenda.push({
										  	date: +this_.agendaObj[val].date,
										  	start: this_.agendaObj[val].start,
										  	end: this_.agendaObj[val].end,										  	
										  	title: this_.agendaObj[val].title,
										  	place: this_.agendaObj[val].place,
										  	order: +this_.agendaObj[val].order
										  });
										});  
										console.log(this.agenda)  */                                                                   
                  }, 
                  err => {
                    console.log('err')         
                  });    
  }; 

}
