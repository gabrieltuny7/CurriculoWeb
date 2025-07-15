import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Post {
  titulo: string;
  categoria: string;
  dataISO: string;
  dataBR: string;
  imagem: string;
  texto: string;
  link: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogComponent {
  posts: Post[] = [
    {
      titulo: 'Eventos de Tecnologia 2025',
      categoria: 'Tech',
      dataISO: '2025-03-05',
      dataBR: '05/03/2025',
      imagem: 'https://i.postimg.cc/DysCZrWs/blog-1.jpg',
      texto: 'Principais eventos e feiras de tecnologia previstos para 2025 no Brasil e no mundo.',
      link: '#'
    },
    {
      titulo: 'Tendências em Desenvolvimento Web',
      categoria: 'Web',
      dataISO: '2025-02-10',
      dataBR: '10/02/2025',
      imagem: 'https://i.postimg.cc/QC7qFDMs/blog-2.jpg',
      texto: 'Quais são as tendências que estão movimentando o mercado de desenvolvimento web neste ano.',
      link: '#'
    },
    {
      titulo: 'Robótica Educacional: por onde começar?',
      categoria: 'Educação',
      dataISO: '2025-01-15',
      dataBR: '15/01/2025',
      imagem: 'https://i.postimg.cc/W1T71QcL/blog-3.jpg',
      texto: 'Dicas e recursos para quem quer iniciar projetos de robótica nas escolas.',
      link: '#'
    },
    // Adicione mais posts conforme seu interesse
  ];
}
