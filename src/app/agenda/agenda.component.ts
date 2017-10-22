import { Component, OnInit } from '@angular/core';

import { AgendaService } from '../services/agenda.service';

import { AgendaLine } from '../agenda-line';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

	private agendaObj: any[] = [];
	private agenda: AgendaLine[] = [];
	private dates: string[] = [];	

  constructor(private agendaService: AgendaService) { };

	ngOnInit() {
		this.getAgenda();
	}  

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

											this_.agenda.push(line);											
										});  
										console.log(this.agenda)                                                                     
                  }, 
                  err => {
                    console.log('err')         
                  });  
  };   

}
