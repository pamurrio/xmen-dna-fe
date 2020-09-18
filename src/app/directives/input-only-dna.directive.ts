import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputOnlyDna]',
})
export class InputOnlyDnaDirective {
  private static readonly allowedKeyCodes = ['A', 'T', 'G', 'C'];

  constructor() {}
  @HostListener('keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    const isKeyAllowed =
      InputOnlyDnaDirective.allowedKeyCodes.indexOf(e.key) !== -1
      || e.key === 'Backspace';

    if (!isKeyAllowed) {
      e.preventDefault();
      return; // let it happen, don't do anything
    }
  }
}
