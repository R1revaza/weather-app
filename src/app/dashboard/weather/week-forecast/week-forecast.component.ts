import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-week-forecast',
  templateUrl: './week-forecast.component.html',
  styleUrls: ['./week-forecast.component.scss']
})
export class WeekForecastComponent  {
  @Input() _sevenDayForecast: any[] = [];


}
