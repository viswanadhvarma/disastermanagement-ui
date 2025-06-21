import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { ResourceComponent } from './resource/resource.component';
import { DisasterlistComponent } from './disasterlist/disasterlist.component';
import { FormsModule } from '@angular/forms';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { ReportsComponent } from './reports/reports.component';
import { OfficialUpdateComponent } from './official-update/official-update.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ResourceComponent,
    DisasterlistComponent,
    SocialFeedComponent,
    ReportsComponent,
    OfficialUpdateComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
