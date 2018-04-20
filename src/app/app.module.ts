import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { WeatherMapService } from './wethermap.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [WeatherMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
