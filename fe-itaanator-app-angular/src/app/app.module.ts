import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Route404Component } from './route404/route404.component';
import { RelationComponent } from './relation/relation.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { RelationModule } from './relation/relation.module';

@NgModule({
  declarations: [
    AppComponent,
    Route404Component,
    //RelationComponent
  ],
  imports: [
    BrowserModule,
    //RelationModule,
    
    BrowserAnimationsModule,
    RelationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
