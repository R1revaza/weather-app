import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'app/services/user.service';
import { WeatherServiceService } from 'app/services/weather-service.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent {
  weatherData: any[] = [];

  constructor(private service: UserService, private weather: WeatherServiceService, private router: Router) {}

  logOut() {
    this.service.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }



  recieveData(data: any) {
    this.weatherData = data;
  }


}
