import { defineCustomElements } from '../../assets/lib/l-map/dist/esm/es5/l-map.define.js';

export function appInitialize() {
  return () => {
    const win = window as any;
    if (typeof win !== 'undefined') {
      // Define all of our custom elements
      defineCustomElements(win);
    }
  };
}
