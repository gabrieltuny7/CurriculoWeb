import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  fullname = '';
  email = '';
  message = '';

  sendMessage() {
  const phone = '5562984194751';

  // Monta todo o texto e faz um único encodeURIComponent
  const text = encodeURIComponent(
    `Nome: ${this.fullname}\n` +
    `Email: ${this.email}\n` +
    `Mensagem: ${this.message}`
  );

  // Usa o link wa.me em vez de api.whatsapp.com
  const url = `https://wa.me/${phone}?text=${text}`;

  window.open(url, '_blank');
}


}
