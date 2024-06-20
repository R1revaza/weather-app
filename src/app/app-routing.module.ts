import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginMainComponent } from './login-main/login-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { SignInComponent } from './Log/sign-in/sign-in.component';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { MapComponent } from './dashboard/map/map.component';
import { CitiesComponent } from './dashboard/cities/cities.component';

const routes: Routes = [
  { path: 'login', component: LoginMainComponent },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
    children: [
      { path: 'weather', component: WeatherComponent },
      { path: 'map', component: MapComponent },
      { path: 'cities', component: CitiesComponent },
      { path: '', redirectTo: 'weather', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
