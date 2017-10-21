import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpeakersService } from './services/speakers.service';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    SpeakersComponent,
    PageNotFoundComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SpeakersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
