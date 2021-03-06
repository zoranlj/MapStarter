import { Component } from '@angular/core';
import { LocationsService } from '../../services/locations/locations';

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
    currentLocationIconUrl = 'https://zoranlj.000webhostapp.com/modities-map/Modus-Mark-Black.png';
    locations: string;
    currentLocation = '[0,0]';
    center = '[10,-85]';
    zoom = '2';
    minZoom = '2';
    maxZoom = '16';

    constructor(private locationsService: LocationsService) {
    }

    ionViewDidEnter(): void {
        this.locationsService.get().subscribe(({values}: any) => {
            this.locations = JSON.stringify(values);
        });
    }

}
