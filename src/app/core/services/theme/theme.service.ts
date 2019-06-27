import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private body = this.document.getElementsByTagName('body')[0];

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  getTheme(): string | null {
    const classList = this.body.classList[0];
    return !!classList ? this.body.classList[0] : null;
  }

  setTheme(newTheme: Theme): void {
    const currentTheme = this.getTheme();

    if (currentTheme !== newTheme) {
      this.body.classList.toggle(newTheme);
    } else {
      return;
    }

    if (currentTheme) {
      this.body.classList.toggle(currentTheme);
    }
  }
}


export type Theme = 'theme-white' | 'theme-black';
