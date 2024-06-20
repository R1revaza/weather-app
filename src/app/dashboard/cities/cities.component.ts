import { Component } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent {
  weatherData: any;
  hourlyWeatherData!: any[];

  weather(weather: any){
    this.weatherData = weather;
  }
  hourly(hourlyWeather: any[]){
    this.hourlyWeatherData = hourlyWeather;
  }

}
