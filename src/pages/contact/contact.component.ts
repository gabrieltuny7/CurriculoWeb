import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactComponent {
  formData = {
    fullname: '',
    email: '',
    mensagem: ''
  };
  sucesso = false;

  enviar() {
    this.sucesso = true;
    // Aqui você pode implementar integração com e-mail real, API etc.
    this.formData = { fullname: '', email: '', mensagem: '' };
    setTimeout(() => (this.sucesso = false), 4000);
  }
}
