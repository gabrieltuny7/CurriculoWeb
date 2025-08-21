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
      name: 'Leandro Hall',
      avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
      preview: 'Gabriel foi contratado para ajudar a escola nas competições de Robótica...',
      text: `Gabriel foi contratado para ajudar a escola nas competições de Robótica. Foi um ex-competidor que ao concluir o ensino médio, chamei para me auxiliar na preparação das equipes. Juntos vencemos competições e levamos conhecimento a varios alunos.`,
      date: 'Março de 2022',
      dateISO: '2022-03-14'
    },
    {
      name: 'Diego Carvalho',
      avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
      preview: 'Foi contratado para ser nosso programador...',
      text: `Sua curva de aprendizado foi impressionante e rapidamente se tornou um membro valioso da equipe, é bastante comunicativo com a equipe e sempre busca melhorar suas habilidades.`,
      date: 'Maio de 2025',
      dateISO: '2025-05-20'
    },
    {
      name: 'Karol Mazzei',
      avatar: 'https://i.postimg.cc/DwY0yHtx/avatar-2.png',
      preview: 'Trabalhar com Gabriel foi uma experiência incrível...',
      text: `Trabalhamos juntos mentoriando equipes de robótica. Ele trouxe conhecimentos voltados a programação que ajudaram a elevar o padrão de qualidade do nosso trabalho.`,
      date: 'Dezembro de 2022',
      dateISO: '2022-12-20'
    },
    {
      name: 'Daniel Moreira',
      avatar: 'https://i.postimg.cc/zGDHfn3G/avatar-1.png',
      preview: 'Contratei o Gabriel para participar no time de analistas...',
      text: `Foi sua primeira vez sendo analista, e ele se destacou rapidamente. Tem uma boa comunicação com os clientes, é bem didático e técnico, um profissional exemplar.`,
      date: 'Janeiro de 2025',
      dateISO: '2025-01-20'
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
