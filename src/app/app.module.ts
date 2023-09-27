import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component'


import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDM_UxYi2m-L-OchuyRtVe2LvWf2NQ-QoI",
        authDomain: "loginangular-b2591.firebaseapp.com",
        projectId: "loginangular-b2591",
        storageBucket: "loginangular-b2591.appspot.com",
        messagingSenderId: "439915405914",
        appId: "1:439915405914:web:958444d78221420c2e6e63",
        measurementId: "G-MG9WTS3L57"
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
