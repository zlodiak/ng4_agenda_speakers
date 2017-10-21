import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { SpeakersService } from '../services/speakers.service';
import { Speaker } from '../speaker';


@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
	
	private sub: any;
	private speakersObj: any[] = [];
  private speaker: Speaker;  
	private scrollTop: number;	

  constructor(private activatedRoute: ActivatedRoute, private speakersService: SpeakersService) { };

  ngOnInit() {
    this.sub = this.activatedRoute.params.subscribe(params => {
    	//console.log(params['guid'], params['scroll_top']); 
      this.getSpeakerInfo(params['guid']);
      this.scrollTop = params['scroll_top'];
    });  	
  }

	ngOnDestroy() {
	  this.sub.unsubscribe();
	}  

  private getSpeakerInfo(guid): void {
  	console.log(guid);
  	
    this.speakersService
      .getSpeakers()
      .subscribe(data => {     
				let response = JSON.parse(data._body);
				//console.log(response);                                                          

				this.speakersObj = response.values;
				console.log(this.speakersObj);  

				this.speaker = this.speakersObj[guid];
				console.log('---', typeof this.speaker, this.speaker);                                                                 
      }, 
      err => {
        console.log('err')         
      });  	
  };	

}
