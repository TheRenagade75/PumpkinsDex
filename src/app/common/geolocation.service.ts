import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }
}

function maPosition(position) {
  let infopos = 'Position déterminée :\n';
  infopos += 'Latitude : ' + position.coords.latitude + '\n';
  infopos += 'Longitude: ' + position.coords.longitude + '\n';
  infopos += 'Altitude : ' + position.coords.altitude + '\n';
  document.getElementById('infoposition').innerHTML = infopos;
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(maPosition, erreurPosition, {maximumAge: 600000, enableHighAccuracy: true});
  navigator.geolocation.watchPosition(surveillePosition);
}

  function surveillePosition(position) {
    let infopos = 'Position déterminée :\n';
    infopos += 'Latitude : ' + position.coords.latitude + '\n';
    infopos += 'Longitude: ' + position.coords.longitude + '\n';
    infopos += 'Altitude : ' + position.coords.altitude + '\n';
    infopos += 'Vitesse  : ' + position.coords.speed + '\n';
    document.getElementById('infoposition').innerHTML = infopos;
}

function erreurPosition(error) {
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
document.getElementById('infoposition').innerHTML = info;
}
