import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { AgendaService } from '../services/agenda.service';
import { SpeakersService } from '../services/speakers.service';
import { AgendaLine } from '../agenda-line';
import { Speaker } from '../speaker';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

	private agendaObj: any[] = [];
	private agenda: AgendaLine[] = [];
	private dates: string[] = [];	

	private speakersObj: any[] = [];
	private speakers: Speaker[] = [];	

	private selectedIndex: number = 0;

  constructor(private agendaService: AgendaService, 
  						private speakersService: SpeakersService, 
  						private activatedRoute: ActivatedRoute,
  						private router: Router) { };

	ngOnInit() {
		this.getAgenda();
		this.getSpeakers();
	}  

  private setTodayTab(): void {
		let date = new Date();
		let todayStr = [('0'+date.getDate()).slice(-2), ('0'+(date.getMonth()+1)).slice(-2), date.getFullYear()].join('.');
		console.log(todayStr);
		let selectedIndex = this.dates.indexOf(todayStr);
		console.log('selectedIndex', selectedIndex); 	
		this.selectedIndex = selectedIndex;
  };

  private getAgenda(): void {
    this.agendaService
        .getAgenda()
        .subscribe(data => {     
        						let response = JSON.parse(data._body);
        						//console.log(response); 

        						this.dates = response['headers'].date.options;        					                                                         
                    console.log(this.dates);                                                         

										this.agendaObj = response.values;
										//console.log(this.agendaObj);    

                    let this_ = this;
										Object.keys(this.agendaObj).map(function(key, val) {
											let line = new AgendaLine();

											line['order'] = +this_.agendaObj[key].order;
											line['title'] = this_.agendaObj[key].title;
											line['title_en'] = this_.agendaObj[key].title_en;
											line['subtitle'] = this_.agendaObj[key].subtitle;
											line['subtitle_en'] = this_.agendaObj[key].subtitle_en;
											line['location'] = this_.agendaObj[key].location;
											line['location_en'] = this_.agendaObj[key].location_en;
											line['date'] = +this_.agendaObj[key].date;
											line['time'] = this_.agendaObj[key].time;
											line['icon'] = this_.agendaObj[key].icon;
											line['speaker_rows'] = this_.agendaObj[key].speaker_rows;

											this_.agenda.push(line);																			
										});  
										console.log(this.agenda)                                                                     
										this_.setTodayTab();	
                  }, 
                  err => {
                    console.log('err')         
                  });  
  };

  private getSpeakers(): void {
    this.speakersService
      .getSpeakers()
      .subscribe(data => {     
				let response = JSON.parse(data._body);
				//console.log(response);                                                          

				this.speakersObj = response.values;
				console.log(this.speakersObj);  

        let this_ = this;
				Object.keys(this.speakersObj).map(function(val, key) {
				  let newSpeaker = new Speaker();
					newSpeaker.guid = val;
					newSpeaker.last_name_ru = this_.speakersObj[val].last_name_ru;
					newSpeaker.last_name_en = this_.speakersObj[val].last_name_en;
					newSpeaker.first_name_ru = this_.speakersObj[val].first_name_ru;
					newSpeaker.first_name_en = this_.speakersObj[val].first_name_en;
					newSpeaker.photo = this_.speakersObj[val].photo;									  	
					newSpeaker.position_ru = this_.speakersObj[val].position_ru;
					newSpeaker.position_en = this_.speakersObj[val].position_en;
					newSpeaker.info_ru = this_.speakersObj[val].info_ru;
					newSpeaker.info_en = this_.speakersObj[val].info_en;
					newSpeaker.order = +this_.speakersObj[val].order;
		  
				  this_.speakers.push(newSpeaker);				  
				});  
				console.log(this.speakers)                                                                     
      }, 
      err => {
        console.log('err')         
      });    
  };  

  private openSpeaker(guid): void {
  	this.router.navigate(['/speaker', guid]);
  };      

}
