import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


interface Testimonial {
  name: string;
  avatar: string;
  preview: string;
  text: string;
  date: string;
  dateISO: string;
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Daniel Lewis',
      avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
      preview: 'Richard foi contratado para criar uma identidade corporativa...',
      text: `Richard foi contratado para criar uma identidade corporativa. É moderno, limpo e com um design...`,
      date: '14 de junho de 2023',
      dateISO: '2023-06-14'
    },
    {
      name: 'Jessica Miller',
      avatar: 'https://i.postimg.cc/DwY0yHtx/avatar-2.png',
      preview: 'Trabalhar com Richard foi um prazer absoluto...',
      text: `Trabalhar com Richard foi um prazer absoluto. Fiquei impressionada com sua atenção aos detalhes...`,
      date: '20 de maio de 2023',
      dateISO: '2023-05-20'
    },
    // adicionar mais depoimentos 
  ];

  modalOpen = false;
  selected!: Testimonial;

  openModal(t: Testimonial) {
    this.selected = t;
    this.modalOpen = true;
  }
  closeModal() {
    this.modalOpen = false;
  }
}
