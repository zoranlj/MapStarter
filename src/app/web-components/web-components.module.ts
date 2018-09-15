import { APP_INITIALIZER, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appInitialize } from './app-initialize';

import { LMapWrapperComponent } from './l-map/l-map-wrapper.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LMapWrapperComponent
  ],
  exports: [
    LMapWrapperComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WebComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WebComponentsModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true
        }
      ]
    };
  }
}
