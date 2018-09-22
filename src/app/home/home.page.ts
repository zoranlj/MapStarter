import { Component } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    tileLayers = [
        {
            value: 'toner',
            url: 'http://a.tile.stamen.com/toner/{z}/{x}/{y}.png'

        }, {
            value: 'openstreetmap',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

        }, {
            value: 'watercolor',
            url: 'http://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg'

        }, {
            value: 'bw',
            url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'

        }
    ];

    selectedTileLayer = this.tileLayers[3];

    iconUrl = 'https://zoranlj.000webhostapp.com/modities-map/Modus-Mark-White.png';
    locations: string;
    center = '[25,-85]';
    zoom = '2';
    minZoom = '2';
    maxZoom = '16';

    constructor(private locationsProvider: LocationsProvider) {
    }

    ionViewDidEnter(): void {
        this.locationsProvider.get().subscribe(({values}: any) => {
            this.locations = JSON.stringify(values);
        });
    }

}
