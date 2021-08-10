import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import firebaseConfig from './firebase';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CreditCardDirectivesModule } from 'angular-cc-library';
import { AuthGuard } from './guards/auth.guard';
//import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';
//import { TwitterService } from 'ng2-twitter';
//import { TwitterProvider } from './providers/twitter/twitter.service';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    CreditCardDirectivesModule,
    
  ],
  providers: [ 
    TwitterConnect,
    //InAppBrowser,
   // TwitterService,
    
    //TwitterProvider,
    AuthGuard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy
     },
    ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
