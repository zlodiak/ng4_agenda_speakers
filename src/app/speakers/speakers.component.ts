import { Component, OnInit } from '@angular/core';

import { SpeakersService } from '../services/speakers.service';
import { Speaker } from '../speaker';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

	private speakersObj: any[] = [];
	private speakers: Speaker[] = [];
  
  constructor(private speakersService: SpeakersService) {};

	ngOnInit() {
		this.getSpeakers();
	};  

  private getSpeakers(): void {
    this.speakersService
      .getSpeakers()
      .subscribe(data => {     
				let response = JSON.parse(data._body);
				//console.log(response);                                                          

				this.speakersObj = response.values;
				//co/nsole.log(this.speakersObj);  

        let this_ = this;
				Object.keys(this.speakersObj).map(function(val, key) {
					console.log(val, key);

				  let newSpeker = new Speaker();
					newSpeker.guid = val;
					newSpeker.last_name_ru = this_.speakersObj[val].last_name_ru;
					newSpeker.last_name_en = this_.speakersObj[val].last_name_en;
					newSpeker.first_name_ru = this_.speakersObj[val].first_name_ru;
					newSpeker.first_name_en = this_.speakersObj[val].first_name_en;
					newSpeker.photo = this_.speakersObj[val].photo;									  	
					newSpeker.position_ru = this_.speakersObj[val].position_ru;
					newSpeker.position_en = this_.speakersObj[val].position_en;
					newSpeker.info_ru = this_.speakersObj[val].info_ru;
					newSpeker.info_en = this_.speakersObj[val].info_en;
					newSpeker.order = +this_.speakersObj[val].order;
		  
				  this_.speakers.push(newSpeker);				  
				});  
				console.log(this.speakers)                                                                     
      }, 
      err => {
        console.log('err')         
      });    
  }; 

}
