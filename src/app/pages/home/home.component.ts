import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import i18next from 'i18next';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule]
})
export class HomeComponent {
  t = i18next.t;
  cvUrl = 'assets/FranzBurneo_es65.pdf';

  constructor() {
    this.setCvUrl(i18next.language);

    // Escuchar cambios de idioma dinámicos
    i18next.on('languageChanged', (lng) => {
      this.setCvUrl(lng);
    });
  }

  private setCvUrl(lang: string) {
    this.cvUrl = lang === 'en'
      ? 'assets/FranzBurneo_en6.pdf'
      : 'assets/FranzBurneo_es8.pdf';
  }
}