import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speakers'
})
export class SpeakersPipe implements PipeTransform {

  transform(speakers: any, searchPhrase: string, lettersCnt: number): any {
  	let filteredSpeakers: any[] = [];

  	if(searchPhrase.length < lettersCnt) { return speakers };

  	speakers.forEach(function(speaker) {
  		let fname = speaker.first_name_ru.toLowerCase();
  		let lname = speaker.last_name_ru.toLowerCase();
  		
  		if(fname.indexOf(searchPhrase) != -1 || lname.indexOf(searchPhrase) != -1) {
  			filteredSpeakers.push(speaker);
  		}
  	});
  	
    return filteredSpeakers;
  }

}
