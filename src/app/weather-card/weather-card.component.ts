import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent{
  Cities: City[] = [
    {
      Id: 0,
      name: 'Ottawa',
      state: 'Sunny',
      temp: 1,
      maxTemp: 5,
      minTemp: 0,
    },
    {
      Id: 0,
      name: 'Toronto',
      state: 'Clouds',
      temp: 5,
      maxTemp: 10,
      minTemp: 0,
    },
    {
      Id: 0,
      name: 'Beijing',
      state: 'Rain',
      temp: 15,
      maxTemp: 20,
      minTemp: 10,
    }
  ];

  constructor() { }

}

interface City {
  Id: number;
  name: string;
  state: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
}