import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ScrumComponent } from './components/scrum/scrum.component';
import { TeamComponent } from './components/team/team.component';
import { SourcesComponent } from './components/sources/sources.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ScrumComponent,
    TeamComponent,
    SourcesComponent,
    TeamCardComponent,
    ItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
