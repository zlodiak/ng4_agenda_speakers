import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule, 
          MatCardModule, 
          MatTabsModule, 
          MatSlideToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpeakersService } from './services/speakers.service';
import { AgendaService } from './services/agenda.service';
import { SpeakerComponent } from './speaker/speaker.component';
import { SpeakersPipe } from './pipes/speakers.pipe';
import { GlobalVarsService } from './services/global-vars.service';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    SpeakersComponent,
    PageNotFoundComponent,
    SpeakerComponent,
    SpeakersPipe
  ],
  imports: [
    MatSlideToggleModule,
    FormsModule,
    OrderModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalVarsService,
    SpeakersService, 
    AgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
