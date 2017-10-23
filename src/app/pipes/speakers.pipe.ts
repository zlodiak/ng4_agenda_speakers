import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speakers'
})
export class SpeakersPipe implements PipeTransform {

  transform(speakers: any, searchPhrase: string, lettersCnt: number, isEnLang: boolean): any {
  	let filteredSpeakers: any[] = [];

  	if(searchPhrase.length < lettersCnt) { return speakers };

  	speakers.forEach(function(speaker) {
      let fname: string;
      let lname: string;

      if(isEnLang) {
        fname = speaker.first_name_en.toLowerCase();
        lname = speaker.last_name_en.toLowerCase();
      } else {
        fname = speaker.first_name_ru.toLowerCase();
        lname = speaker.last_name_ru.toLowerCase();
      }
  		
  		if(fname.indexOf(searchPhrase) != -1 || lname.indexOf(searchPhrase) != -1) {
  			filteredSpeakers.push(speaker);
  		}
  	});
  	
    return filteredSpeakers;
  }

}
