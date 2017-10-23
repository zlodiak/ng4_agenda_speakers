import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { SpeakersService } from '../services/speakers.service';
import { Speaker } from '../speaker';
import { GlobalVarsService } from '../services/global-vars.service';


@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.component.html',
  styleUrls: ['./speaker.component.css']
})
export class SpeakerComponent implements OnInit {
	
	private sub: any;
	private speakersObj: any[] = [];
  private speaker: Speaker;  

  private isEnLang: boolean;

  constructor(private activatedRoute: ActivatedRoute, 
              private speakersService: SpeakersService,
              private globalVarsService: GlobalVarsService) { };

  ngOnInit() {
    this.checkLang();
    this.checkRouteParams();
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
				this.speaker['guid'] = guid;
				console.log('---', typeof this.speaker, this.speaker);                                                                 
      }, 
      err => {
        console.log('err')         
      });  	
  };

  private checkRouteParams(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.getSpeakerInfo(params['guid']);
    });      
  };

  private checkLang(): void {
    this.globalVarsService.getLangState().subscribe(data => setTimeout(() => {
      console.log('subscribe', data);
      this.isEnLang = data;
    }, 0));     
  }; 

}
