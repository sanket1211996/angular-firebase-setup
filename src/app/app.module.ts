import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MeetingComponent } from './meeting/meeting.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { AngularFireStorageModule } from 'angularfire2/storage';
// import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCpqI773ach6MxOcIqRvgDFBVVTvLJW-Ew",
    authDomain: "sample6-d38d3.firebaseapp.com",
    databaseURL: "https://sample6-d38d3.firebaseio.com",
    projectId: "sample6-d38d3",
    storageBucket: "gs://sample6-d38d3.appspot.com",
    messagingSenderId: "358754973898"
    }),
    ],
  declarations: [ AppComponent, HelloComponent, MeetingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
