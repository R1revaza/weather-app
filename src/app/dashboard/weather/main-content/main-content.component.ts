import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { WeatherServiceService } from 'app/services/weather-service.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  name!: string;
  weatherData: any;
  hourlyData: any[] = [];
  currentHour: Date = new Date();
  newArr: any[] = [];
  test: any = [];
  clicked: boolean = true;
  @Output() WeatherData = new EventEmitter();

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherByLocation().subscribe(data => {
      this.weatherData = data;
      this.hourlyData = this.weatherService.combineHourlyData(data);
      this.WeatherData.emit(data.forecast.forecastday);
      this.filter();
    });
  }

  search() {
    this.weatherService.getWeatherByName(this.name).subscribe((weatherData) => {
      this.weatherData = weatherData;
      this.hourlyData = this.weatherService.combineHourlyData(weatherData);
      this.WeatherData.emit(weatherData.forecast.forecastday);
      this.filter();
    });
  }

  filter() {
    this.newArr = this.hourlyData.filter(element => {
      const data = new Date(element.time);
      return data >= this.currentHour;
    });
    this.test = this.hourlyData.filter(elementAt => {
      const data = new Date(elementAt.time);
      return data.getHours() == this.currentHour.getHours();
    });
    this.newArr.splice(8);
  }

  


}
