import { forwardRef, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, ButtonComponent],
  imports: [BrowserModule],
  entryComponents: [InputComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),  // replace name as appropriate
      multi: true
    }
  ]
})
export class AppModule {
  constructor(
    private injector: Injector
  ) {
    const inputavvillas = createCustomElement(InputComponent, { injector });
    const buttonvillas = createCustomElement(ButtonComponent, { injector });
    customElements.define('avvillas-input', inputavvillas);
    customElements.define('avvillas-button', buttonvillas);
  }
  ngDoBootstrap() {}
}
