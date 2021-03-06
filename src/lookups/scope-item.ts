import {Directive, TemplateRef, Input, Output, EventEmitter} from '@angular/core';

@Directive({selector: 'ng-template[nglPolymorphicItem]'})
export class NglLookupScopeItem {
  @Input() scopes: any[] = [];

  @Output() scopeChange = new EventEmitter();

  constructor(public templateRef: TemplateRef<any>) {}
}
