import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import i18next from 'i18next';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, SlickCarouselModule]
})
export class ProjectsComponent {
  t = i18next.t;

  gestionImages = [
    'assets/imgs/proyectos/gestiona/p1.webp',
    'assets/imgs/proyectos/gestiona/p2.webp',
    'assets/imgs/proyectos/gestiona/p3.webp',
    'assets/imgs/proyectos/gestiona/p4.webp'
  ];
  lsWebImages = [
    'assets/imgs/proyectos/lsweb/p1.webp',
    'assets/imgs/proyectos/lsweb/p2.webp',
    'assets/imgs/proyectos/lsweb/p3.webp',
    'assets/imgs/proyectos/lsweb/p4.webp',
    'assets/imgs/proyectos/lsweb/p5.webp',
    'assets/imgs/proyectos/lsweb/p6.webp',
    'assets/imgs/proyectos/lsweb/p7.webp',
    'assets/imgs/proyectos/lsweb/p8.webp'
  ];
  lsMovilImages = [
    'assets/imgs/proyectos/lsmovil/p1.webp',
    'assets/imgs/proyectos/lsmovil/p2.webp',
    'assets/imgs/proyectos/lsmovil/p3.webp',
    'assets/imgs/proyectos/lsmovil/p4.webp',
    'assets/imgs/proyectos/lsmovil/p5.webp',
    'assets/imgs/proyectos/lsmovil/p6.webp',
    'assets/imgs/proyectos/lsmovil/p7.webp',
    'assets/imgs/proyectos/lsmovil/p8.webp',
    'assets/imgs/proyectos/lsmovil/p9.webp',
    'assets/imgs/proyectos/lsmovil/p10.webp'
  ];
  digiMenuImages = [
    'assets/imgs/proyectos/digimenu/p1.webp',
    'assets/imgs/proyectos/digimenu/p2.webp',
    'assets/imgs/proyectos/digimenu/p3.webp',
    'assets/imgs/proyectos/digimenu/p4.webp',
    'assets/imgs/proyectos/digimenu/p5.webp'
  ];

  selectedGestionaImage = this.gestionImages[0];
  selectedLsWebImage = this.lsWebImages[0];
  selectedLsMovilImage = this.lsMovilImages[0];
  selectedDigiMenuImage = this.digiMenuImages[0];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    infinite: true
  };
}