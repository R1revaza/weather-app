import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginMainComponent } from './login-main/login-main.component';
import { LoginFormComponent } from './login-main/login-form/login-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './Log/sign-in/sign-in.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UserService } from './services/user.service';
import { firebaseConfig } from './firebase.config';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Firestore } from '@angular/fire/firestore';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './dashboard/side-bar/side-bar.component';
import { MainContentComponent } from './dashboard/weather/main-content/main-content.component';
import { WeekForecastComponent } from './dashboard/weather/week-forecast/week-forecast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CitiesComponent } from './dashboard/cities/cities.component';
import { MapComponent } from './dashboard/map/map.component';
import { WeatherComponent } from './dashboard/weather/weather.component';
import { RouterModule } from '@angular/router';
import { DescComponent } from './dashboard/cities/desc/desc.component';
import { CitiesMainComponent } from './dashboard/cities/cities-main/cities-main.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginMainComponent,
    LoginFormComponent,
    SignInComponent,
    DashboardComponent,
    SideBarComponent,
    MainContentComponent,
    WeekForecastComponent,
    CitiesComponent,
    MapComponent,
    WeatherComponent,
    DescComponent,
    CitiesMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    provideClientHydration(),
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
