import { Component, HostListener } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { WeatherServiceService } from 'app/services/weather-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  weatherData: any[] = [];
  boolean: boolean = true;

  constructor(private service: UserService, private weather: WeatherServiceService, private router: Router) {}

  logOut() {
    this.service.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
  menu() {
    this.boolean = !this.boolean;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.boolean = window.innerWidth > 600;
  }
  close() {
    this.boolean = false;
  }
}
