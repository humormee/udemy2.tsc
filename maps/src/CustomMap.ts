import { Company } from './Company';
import { User } from './User';
import { Mappable } from './Mappable';

//only one method:
//put a marker in the map

//we are hiding the existence of the google map object
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    let map: HTMLElement | null;
    map = document.getElementById(divId);

    if (map) {
      this.googleMap = new google.maps.Map(map, {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      });
    }
  }

  addMarker(mappable: mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
