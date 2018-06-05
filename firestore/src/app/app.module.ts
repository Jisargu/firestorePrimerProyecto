import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

 // Initialize Firebase
 var firebaseConfig = {
  apiKey: "AIzaSyBYzh4lmk5bb8KTIWbD25bZx_FyP52r4q4",
  authDomain: "angularconfirestore.firebaseapp.com",
  databaseURL: "https://angularconfirestore.firebaseio.com",
  projectId: "angularconfirestore",
  storageBucket: "angularconfirestore.appspot.com",
  messagingSenderId: "976482746249"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
