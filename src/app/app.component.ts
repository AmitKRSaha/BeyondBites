import { Component, OnInit } from '@angular/core';

import { WeatherMapService } from './wethermap.service';
import { wethermap } from './weathermap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  textValue: string;
  log = '';
  isSearchItem: boolean = false;
  weatherdata : wethermap;

  constructor(private weatherservice: WeatherMapService) { }

  ngOnInit(): void {
    console.log(this.weatherservice.getWetherdata());
  }

  SearchWeatherReport(value: string): void {
    
    this.log += `Text changed to '${value}'\n`;
  }
}
