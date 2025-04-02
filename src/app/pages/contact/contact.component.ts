import { Component } from '@angular/core';
import i18next from 'i18next';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  t = i18next.t;

  form = {
    name: '',
    email: '',
    title: '',
    message: ''
  };

  constructor(private toastr: ToastrService) {}

  sendEmail() {
    const { name, email, title, message } = this.form;

    // Validación básica de campos vacíos
    if (!name || !email || !title || !message) {
      this.toastr.warning(this.t('CONTACT.EMPTY_FIELDS'));
      return;
    }

    // Validación de formato de correo electrónico
    if (!this.isValidEmail(email)) {
      this.toastr.warning(this.t('CONTACT.INVALID_EMAIL'));
      return;
    }

    const serviceID = 'service_zh3r7to';
    const templateID = 'template_93fbi3j';
    const publicKey = 'XGExssABpAYD75Ffo';

    const params = {
      name,
      email,
      subject: title,
      message
    };

    emailjs.send(serviceID, templateID, params, publicKey)
      .then(() => {
        this.toastr.success(this.t('CONTACT.SUCCESS'));
        this.form = { name: '', email: '', title: '', message: '' };
      })
      .catch(() => {
        this.toastr.error(this.t('CONTACT.ERROR'));
      });
  }

  // 🔎 Validador de formato de correo electrónico
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}