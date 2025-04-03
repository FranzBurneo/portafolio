import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import i18next from './core/i18n';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedLang = 'es';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  closeMenu() {
    this.menuOpen = false;
  }

  get t() {
    return i18next.t;
  }

  changeLang(lang: string) {
    this.selectedLang = lang;
    i18next.changeLanguage(lang);

    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }

  constructor() {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') || 'es';
      this.selectedLang = savedLang;
      i18next.changeLanguage(savedLang);
    } else {
      // fallback para entornos sin acceso al window
      this.selectedLang = 'es';
      i18next.changeLanguage('es');
    }
  }
}