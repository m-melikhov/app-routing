import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PhrasesListComponent } from './phrases/phrases-list/phrases-list.component';
import { PhraseDetailsComponent } from './phrases/phrase-details/phrase-details.component';
import { PhrasesModule } from './phrases/phrases.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhrasesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
