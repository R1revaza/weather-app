import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { Map, MapStyle, config } from '@maptiler/sdk';
import { TemperatureLayer, WindLayer } from '@maptiler/weather';
import '@maptiler/sdk/dist/maptiler-sdk.css';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  @ViewChild('map', { static: true })
  private mapContainer!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    config.apiKey = 'LU36sI8XkRf314UsVWOe';
  }

  ngAfterViewInit(): void {
    const initialState = { lng: 139.753, lat: 35.6844, zoom: 0 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });

    this.map.on('load', () => {
      const temperatureLayer = new TemperatureLayer({});
      temperatureLayer.animateByFactor(10000);
      this.map?.setPaintProperty('Water', 'fill-color', 'rgba(0, 0, 0, 0.5)');
      this.map?.addLayer(temperatureLayer, 'Water');
      this.map?.addLayer(temperatureLayer);
    });


  }

  
  ngOnDestroy(): void {
    this.map?.remove();
  }
}