import '@zoranlj/l-map';

import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'l-map-wrapper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
      <div (message)="handleMessageEvent($event)" style="height: 100%">
          <ng-content></ng-content>
      </div>
  `
})
export class LMapWrapperComponent {

    constructor(private alertController: AlertController) {
        console.log('Hello LMapWrapperComponent Component');
    }

    async presentAlert(e) {
        const alert = await this.alertController.create({
            header: 'Location',
            subHeader: 'Lat, Lng',
            message: e.detail,
            buttons: ['OK']
        });

        await alert.present();
    }

    handleMessageEvent(e) {
        this.presentAlert(e);
        console.log('Received message from l-map component: ', e.detail);
    }
}
