import {Directive, inject, TemplateRef, ViewContainerRef} from '@angular/core';
import {PlatformService} from "../services/platform.service";

@Directive({
  selector: '[ssrNot]',
  standalone: true
})
export class SsrNotDirective {
  private readonly templateRef = inject(TemplateRef<any>);
  private readonly viewContainer = inject(ViewContainerRef);
  private readonly platformService = inject(PlatformService);

  constructor() {
    if (this.platformService.isOnVue()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
