import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendaComponent } from './agenda/agenda.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { SpeakerComponent } from './speaker/speaker.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/speakers',
    pathMatch: 'full'
  },
  {
    path: 'agenda',
    children: [],
    component: AgendaComponent
  }, 
  {
    path: 'speakers',
    children: [],
    component: SpeakersComponent
  }, 
  {
    path: 'speaker/:guid',
    children: [],
    component: SpeakerComponent
  },   
  {
  	path: '**', 
  	component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






