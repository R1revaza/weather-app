import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-desc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.scss']
})
export class DescComponent implements OnInit{
  @Input() weatherData: any;
  @Input() hourlyWeatherData: any[] = [];

  newWeatherData:any;

  ngOnInit(): void {
    this.newWeatherData = this.weatherData.forecast.forecastDay;
  }


}
