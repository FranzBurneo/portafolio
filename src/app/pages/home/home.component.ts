import { Component } from '@angular/core';
import i18next from 'i18next';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  t = i18next.t;
}