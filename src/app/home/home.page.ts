import { Component } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

    tileLayers = [
        'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png',
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg',
        'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
    ];
    iconUrl = 'https://zoranlj.000webhostapp.com/modities-map/Modus-Mark-White.png';
    locations: string;
    center = '[0,-80]';
    zoom = '2';
    minZoom = '2';
    maxZoom = '6';

    constructor(private locationsProvider: LocationsProvider) {}

    ionViewDidEnter(): void {
        this.locationsProvider.get().subscribe( ({ values }: any) => {
            this.locations = JSON.stringify(values);
        });
    }

}
