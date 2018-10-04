import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
/*
  Generated class for the LocationsService provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationsService {

  apiKey: string; // https://developers.google.com/sheets/api/guides/authorizing#APIKey
  spreadsheetId = '1xNaJnOxZFmMbg6KnXELHNgmJSJ5zNUEeMkqUsvgmrfE';
  configUrl = `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/Sheet1?key=${this.apiKey}`;

  constructor(public http: HttpClient) {
    console.log('Hello LocationsService Provider');
  }

  get() {
      return this.apiKey ? this.http.get(this.configUrl) : EMPTY;
  }

}
