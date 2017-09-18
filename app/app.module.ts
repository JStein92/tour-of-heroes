import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroDetailComponent } from './hero-detail.component';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent, HeroFormComponent }  from './app.component';
// import {  }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent, HeroDetailComponent, HeroFormComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
