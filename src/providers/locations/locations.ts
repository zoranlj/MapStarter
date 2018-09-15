import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocationsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsProvider {

  apiKey = 'AIzaSyCs2CRt0SqmWGYhU-W9BkhgynUj27dEXHE';
  spreadsheetId = '1xNaJnOxZFmMbg6KnXELHNgmJSJ5zNUEeMkqUsvgmrfE';
  configUrl = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/Sheet1?key=${this.apiKey}`;

  constructor(public http: HttpClient) {
    console.log('Hello LocationsProvider Provider');
  }

  get() {
    return this.http.get(this.configUrl);
  }

}
