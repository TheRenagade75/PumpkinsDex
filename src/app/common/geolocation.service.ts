import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }


  maPosition(position) {
    let infopos = 'Position déterminée :\n';
    infopos += 'Latitude : ' + position.coords.latitude + '\n';
    infopos += 'Longitude: ' + position.coords.longitude + '\n';

    return infopos;
  }


  surveillePosition(position) {
    let infopos = 'Position déterminée :\n';
    infopos += 'Latitude : ' + position.coords.latitude + '\n';
    infopos += 'Longitude: ' + position.coords.longitude + '\n';

    return infopos;
  }

  erreurPosition(error) {
    let info = 'Erreur lors de la géolocalisation : ';
    switch (error.code) {
      case error.TIMEOUT:
        info += 'Timeout !';
        break;
      case error.PERMISSION_DENIED:
        info += 'Vous n’avez pas donné la permission';
        break;
      case error.POSITION_UNAVAILABLE:
        info += 'La position n’a pu être déterminée';
        break;
      case error.UNKNOWN_ERROR:
        info += 'Erreur inconnue';
        break;
    }
  }

 // if (navigator) {
  //  navigator.geolocation.getCurrentPosition(this.maPosition, this.erreurPosition, { maximumAge: 600000, enableHighAccuracy: true });
   // navigator.geolocation.watchPosition(this.surveillePosition);
//  }
}
