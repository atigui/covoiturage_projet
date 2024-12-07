import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  template: '<div id="map" style="height: 400px;"></div>',
  styles: []
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: L.Map;
  private marker: L.Marker;

  @Input() initialLat: number = 46.603354;
  @Input() initialLng: number = 1.888334;
  @Output() locationSelected = new EventEmitter<{lat: number, lng: number}>();

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([this.initialLat, this.initialLng], 6);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(this.map);

    this.map.on('click', (e: L.LeafletMouseEvent) => {
      const { lat, lng } = e.latlng;
      this.setMarker(lat, lng);
      this.locationSelected.emit({ lat, lng });
    });
  }

  private setMarker(lat: number, lng: number): void {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    this.marker = L.marker([lat, lng]).addTo(this.map);
  }
}

