import { Component } from '@angular/core';
import { LocationsProvider } from '../../providers/locations/locations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

    tilelayer = 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png';
    iconurl = 'https://zoranlj.000webhostapp.com/modities-map/Modus-Mark-White.png';
    locations: string;
    center = '[0,-80]';
    zoom = '2';

    constructor(private locationsProvider: LocationsProvider) {}

    ionViewDidEnter(): void {
        this.locationsProvider.get().subscribe( ({ values }: any) => {
            this.locations = JSON.stringify(values);
        });
    }

}
