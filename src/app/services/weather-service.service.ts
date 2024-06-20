import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiKey: string = '282565c309f24f11bd9135332241006';
  private baseUrl: string = `https://api.weatherapi.com/v1/forecast.json?`;
  temp: any;
  constructor(private http: HttpClient) { }

  getCurrentLocation(): Observable<GeolocationPosition> {
    return new Observable<GeolocationPosition>((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            observer.next(position);
            observer.complete();
          }
        );
      } 
    });
  }

  getWeatherByLocation(): Observable<any> {
    return this.getCurrentLocation().pipe(
      switchMap((position) => {
        const lat = position?.coords.latitude;
        const lon = position?.coords.longitude;
        return this.http.get<any>(`${this.baseUrl}key=${this.apiKey}&q=${lat},${lon}&aqi=yes&days=7`);
      })
    );
  }

  getWeatherByName(name: string) {
    return this.http.get<any>(`${this.baseUrl}key=${this.apiKey}&q=${name}&aqi=yes&days=7`)
  }

  combineHourlyData(weatherData: any): any[] {
    const todayHourly = weatherData.forecast.forecastday[0].hour;
    const tomorrowHourly = weatherData.forecast.forecastday[1]?.hour || [];
    return [...todayHourly, ...tomorrowHourly];
  }

}
