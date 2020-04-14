import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { Map as LeafletMap, TileLayer, Marker, latLng } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('placeholder', {static: true}) element: ElementRef;
  map: LeafletMap;

  constructor(private zone: NgZone) { 
  }

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(()=>{
      this.map = new LeafletMap(this.element.nativeElement, {
        center: [44.725085, 37.819478],
        zoom: 16
      });
      const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const layer = new TileLayer(url,
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      );
      layer.addTo(this.map);
    });
  }

}
