import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, isPlatformServer} from "@angular/common";

@Injectable()
export class PlatformService {

  private platformId: Object = inject(PLATFORM_ID);

  isOnVue(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  isOnServ(): boolean {
    return isPlatformServer(this.platformId);
  }}
