import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherServiceService } from 'app/services/weather-service.service';

@Component({
  selector: 'app-cities-main',
  templateUrl: './cities-main.component.html',
  styleUrls: ['./cities-main.component.scss'],
})
export class CitiesMainComponent implements OnInit {
  name!: string;
  searchedData: any;
  currentHour: Date = new Date();
  hourlyData: any[] = [];
  hourlyDataArray: any[] = [];
  defaultWeatherData: any[] = [];
  @Output() weatherData = new EventEmitter();
  @Output() hourlyWeatherData = new EventEmitter();

  constructor(private service: WeatherServiceService) {}

  ngOnInit(): void {
    const cities = ['New York', 'London', 'Tokyo', 'Dubai', 'Paris'];
    cities.forEach(city => {
      this.service.getWeatherByName(city).subscribe((data) => {
        this.defaultWeatherData.push(data);
      });
    });
  }

  search() {
    this.service.getWeatherByName(this.name).subscribe((data) => {
      this.hourlyData = this.service.combineHourlyData(data);
      this.weatherData.emit(data)
      this.filter(); 
    });
  }

  filter() {
    const currentTime = new Date(); 
    this.hourlyDataArray = this.hourlyData.filter((element) => {
      const dataTime = new Date(element.time);
      return dataTime >= currentTime;
    }).slice(0, 3); 
    this.hourlyWeatherData.emit(this.hourlyDataArray)
  }


}
