import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatTabsModule } from '@angular/material';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpeakersService } from './services/speakers.service';
import { AgendaService } from './services/agenda.service';
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
    SpeakersService, 
    AgendaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
