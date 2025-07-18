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
      titulo: 'CAMPUS PARTY GOIAS',
      categoria: 'Participação como Visitante',
      dataISO: '2025-03-05',
      dataBR: '2024 - Atualmente',
      imagem: 'https://i.postimg.cc/MGpbL949/Campus-Party.webp',
      texto: 'A Campus Party Goiás é a maior edição regional do festival brasileiro de tecnologia, inovação e criatividade. Ela reúne milhares de pessoas interessadas em tecnologia, ciência, empreendedorismo e cultura digital.',
      link: 'https://brasil.campus-party.org/cpgoias4/'
    },
    {
      titulo: 'Festival Sesi de Robótica',
      categoria: 'Participações como Juiz, Técnico e Competidor',
      dataISO: '2025-01-15',
      dataBR: '2022 - Atualmente',
      imagem: 'https://i.postimg.cc/y8dRK4Dq/festival-robotica-Brasilia.jpg',
      texto: 'O Festival Sesi de Robótica é um dos maiores eventos educacionais do Brasil voltados para tecnologia, ele ocorre todos os anos. Ele reúne estudantes de todos os estados para competições, como a FIRST LEGO League (FLL), FIRST Tech Challenge (FTC), FIRST Robotics Competition e STEAM Racing.',
      link: 'https://g1.globo.com/especial-publicitario/festival-sesi-de-robotica/noticia/2022/05/29/conheca-os-campeoes-do-festival-sesi-de-robotica.ghtml'
    },
    {
      titulo: 'FIRST Lego League - OPEN BRAZIL ',
      categoria: 'Participação como Mentor',
      dataISO: '2025-01-15',
      dataBR: '2022',
      imagem: 'https://i.postimg.cc/k5TtbZPQ/Festival-Sesi-De-Robotica.png',
      texto: 'O FIRST LEGO League International Open Brazil 2022, organizado pelo SESI, foi realizado de 5 a 7 de agosto de 2022 no Píer Mauá, em Rio de Janeiro. Em paralelo ao evento, aconteceu também o Off Season da First Robotics Competition. Foi a primeira vez que o Brasil sediou esta edição International Open, consolidando-se como um grande hub de robótica educacional na América Latina.',
      link: 'https://esportegoiano.com.br/tecnico-robotica-goiano-eleito-melhor-brasil-evento-rj/'
    },
    {
      titulo: 'Olimpíada Brasileira de Robótica',
      categoria: 'Participações como Competidor, Técnico e Mentor',
      dataISO: '2025-01-15',
      dataBR: '2019 - Atualmente',
      imagem: 'https://i.postimg.cc/c4MqS2Vc/obr2025.png',
      texto: 'A Olimpíada Brasileira de Robótica (OBR) é uma competição educacional que tem como objetivo estimular o interesse dos estudantes pela robótica e pela tecnologia. A OBR é realizada anualmente e envolve equipes de diversas escolas e instituições de ensino.',
      link: 'https://esportegoiano.com.br/tecnico-robotica-goiano-eleito-melhor-brasil-evento-rj/'
    },
    {
      titulo: 'Olimpíada Brasileira de Satélites MCTI: OBSAT',
      categoria: 'Participação como Mentor',
      dataISO: '2025-01-15',
      dataBR: '2023',
      imagem: 'https://i.postimg.cc/jdMct0bz/Obsat.png',
      texto: 'A Olimpíada Brasileira de Satélites MCTI (OBSAT MCTI) é uma olimpíada bianual que nasce de uma iniciativa inovadora que visa promover experiências teóricas e práticas em projetos de satélites de pequeno porte, conhecidos como smallsats, disseminando a cultura aeroespacial e o conhecimento em STEM (Ciência, Tecnologia, Engenharia e Matemática) entre estudantes e professores de todos os níveis de ensino.',
      link: 'https://www.obsat.org.br/index.html'
    },
    {
      titulo: 'Expo Fecomércio',
      categoria: 'Participação como Visitante',
      dataISO: '2025-02-10',
      dataBR: '2024',
      imagem: 'https://i.postimg.cc/65rtTc36/expofecormecio.jpg',
      texto: 'A Expo Fecomércio é considerada a maior exposição do comércio de bens, serviços e turismo da região Centro-Norte do Brasil. O evento também destacou a importância da Inteligência Artificial no comércio, com palestras e discussões sobre o tema, mostrando como essa tecnologia pode ser utilizada para impulsionar negócios e melhorar a experiência do cliente.',
      link: 'https://www.instagram.com/expofecomercio/'
    },
    {
      titulo: 'Expo Peças',
      categoria: 'Participações como Voluntário e Visitante',
      dataISO: '2025-02-10',
      dataBR: '2019,2021,2023',
      imagem: 'https://i.postimg.cc/NFjKsn6n/icon-expope-as.webp',
      texto: 'A Expo Peças é a maior feira de negócios, tecnologias e peças automotivas do Centro-Oeste, a qual é sediada em Goiânia-GO desde sua primeira edição em 2015.',
      link: 'https://www.expopecas.com.br/'
    },
    
  ];
}
