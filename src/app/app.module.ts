import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpeakersService } from './services/speakers.service';
import { SpeakerComponent } from './speaker/speaker.component';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    SpeakersComponent,
    PageNotFoundComponent,
    SpeakerComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SpeakersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
