import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import i18next from 'i18next';

@Component({
  standalone: true,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [
    CommonModule,
    ScrollRevealDirective
  ]
})
export class AboutComponent {
  get t() {
    return i18next.t;
  }

  get strengths(): string[] {
    return i18next.t('ABOUT_SECTION.STRENGTHS', { returnObjects: true }) as string[];
  }

  get exp1Tasks(): string[] {
    return i18next.t('ABOUT_SECTION.EXPERIENCE_1.TASKS', { returnObjects: true }) as string[];
  }

  get exp2Tasks(): string[] {
    return i18next.t('ABOUT_SECTION.EXPERIENCE_2.TASKS', { returnObjects: true }) as string[];
  }
}