import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import i18next from './core/i18n'; // ajusta la ruta si está en otro lado

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Getter válido
  get t() {
    return i18next.t;
  }

  // Método para cambiar idioma
  changeLang(lang: string) {
    i18next.changeLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
    }
  }  

  constructor() {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang') || 'es';
      i18next.changeLanguage(savedLang);
    } else {
      i18next.changeLanguage('es'); // fallback por si estás en SSR
    }
  }  
}