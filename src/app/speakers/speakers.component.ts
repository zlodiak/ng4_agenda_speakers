import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

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
	private sub: any;
  
  constructor(	private speakersService: SpeakersService, 
  							private _sanitizer: DomSanitizer,
  							private activatedRoute: ActivatedRoute,
  							private router: Router) {};

	ngOnInit() {
		this.getSpeakers();
		this.checkScroll();
	};  

  ngOnDestroy() {
    this.sub.unsubscribe();
  }	

  private checkScroll(): void {
		this.sub = this.activatedRoute
		  .queryParams
		  .subscribe(params => {
		    if(+params['scroll_top'] != 0) {
		    	let content = document.getElementById('content');
		    	content.scrollBy(+params['scroll_top'])
		    }
		  });  	
  };

  private openDetails(guid): void {
  	let scrollTop = document.getElementById('content').scrollTop;
  	console.log(guid, scrollTop);
  	this.router.navigate(['/speaker', guid, scrollTop]);
  };

  private getSpeakers(): void {
    this.speakersService
      .getSpeakers()
      .subscribe(data => {     
				let response = JSON.parse(data._body);
				//console.log(response);                                                          

				this.speakersObj = response.values;
				//console.log(this.speakersObj);  

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

}
