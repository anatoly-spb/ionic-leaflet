import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, NgZone, AfterViewChecked } from '@angular/core';
import { Map as LeafletMap, TileLayer, Marker, latLng } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild('placeholder', {static: false}) element: ElementRef;
  private map: LeafletMap;

  constructor(private zone: NgZone) { 
  }


  ngOnInit() {}

  ngAfterViewInit(): void {
    this.map = this.zone.runOutsideAngular(()=>{
      const map = new LeafletMap(this.element.nativeElement, {
        center: [44.725085, 37.819478],
        zoom: 16
      });
      const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      const layer = new TileLayer(url,
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      );
      layer.addTo(map);
      return map;
    });
  }

  ngAfterViewChecked(): void {
    this.map.invalidateSize();
  }


}
