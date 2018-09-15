// LMap: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './l-map.core.js';
import {
  LMap
} from './l-map.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    LMap
  ], opts);
}