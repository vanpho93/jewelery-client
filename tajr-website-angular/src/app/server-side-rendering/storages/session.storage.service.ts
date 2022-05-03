import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor(@Inject(PLATFORM_ID) private platformId) {
  }

  get(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      return sessionStorage.getItem(key);
    }
  }

  set(key: string, value: string) {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.setItem(key, value);
    }

  }

  remove(key: string) {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.removeItem(key);
    }
  }

  clear() {
    if (isPlatformBrowser(this.platformId)) {
      sessionStorage.clear();
    }

  }
}
