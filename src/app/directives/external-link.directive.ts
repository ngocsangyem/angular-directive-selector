import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'a:not([routerLink])',
})
export class ExternalLinkDirective {
  @HostBinding('rel')
  @Input()
  rel = 'noopener';

  @HostBinding('target')
  @Input()
  target = '_blank';
  constructor() {}
}
