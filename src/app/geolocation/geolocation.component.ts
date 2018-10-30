import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../common/geolocation.service';


@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.css']
})


export class GeolocationComponent implements OnInit {

  constructor(geolocationService: GeolocationService) {
  }
  ngOnInit() {
  }
}
