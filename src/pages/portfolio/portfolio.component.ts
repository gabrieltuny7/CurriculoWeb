import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Projeto {
  titulo: string;
  categoria: string;
  categoriaNome: string;
  imagem: string;
  link: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioComponent {
  categoriaSelecionada: string = 'todos';
  selectOpen: boolean = false;

  categorias: any = {
    todos: 'Todos',
    web: 'Web',
    aplicativos: 'Aplicativos',
    automacao: 'Automação'
  };

  projetos: Projeto[] = [
    {
      titulo: 'CRM BRSoft',
      categoria: 'web',
      categoriaNome: 'Web',
      imagem: 'https://i.postimg.cc/W34HYH8w/Brsoft-Controle-Reset.png',
      link: 'https://brsoftgo.com.br/login'
    },
    {
      titulo: 'Financeiro Web',
      categoria: 'web',
      categoriaNome: 'Web',
      imagem: 'https://i.postimg.cc/qRHpHMyd/project-1.jpg',
      link: '#'
    },
    {
      titulo: 'Aplicativo Tarefas',
      categoria: 'aplicativos',
      categoriaNome: 'Aplicativos',
      imagem: 'https://i.postimg.cc/dtpXxNGb/project-4.png',
      link: '#'
    },
    {
      titulo: 'Automação Escolar',
      categoria: 'automacao',
      categoriaNome: 'Automação',
      imagem: 'https://i.postimg.cc/43T0JKLw/project-5.png',
      link: '#'
    },
    // Adicione outros projetos conforme seu portfólio
  ];

  setCategory(cat: string) {
    this.categoriaSelecionada = cat;
    this.selectOpen = false;
  }

  toggleSelect() {
    this.selectOpen = !this.selectOpen;
  }

  get categoriaSelecionadaNome() {
    return this.categorias[this.categoriaSelecionada];
  }

  projetosFiltrados() {
    if (this.categoriaSelecionada === 'todos') {
      return this.projetos;
    }
    return this.projetos.filter(p => p.categoria === this.categoriaSelecionada);
  }
}
