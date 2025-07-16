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
      titulo: 'Festival Sesi de Robótica',
      categoria: 'Participação como Juiz da Competição',
      dataISO: '2025-01-15',
      dataBR: '2022 - Atualmente',
      imagem: 'https://i.postimg.cc/k5TtbZPQ/Festival-Sesi-De-Robotica.png',
      texto: 'O Festival Sesi de Robótica é um dos maiores eventos educacionais do Brasil voltados para tecnologia, ele ocorre todos os anos. Ele reúne estudantes de todos os estados para competições, como a FIRST LEGO League (FLL), FIRST Tech Challenge (FTC), FIRST Robotics Competition e STEAM Racing.',
      link: '#'
    },
    // Adicione mais posts conforme seu interesse
  ];
}
