// src/app/app.component.ts

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmes = [
    { nome: 'Ação no Ar', categoria: 'Ação' },
    { nome: 'Corrida Final', categoria: 'Ação' },
    { nome: 'Missão Impossível', categoria: 'Ação' },
    { nome: 'Risada Certa', categoria: 'Comédia' },
    { nome: 'Férias Frustradas', categoria: 'Comédia' },
    { nome: 'Noite de Jogo', categoria: 'Comédia' },
    { nome: 'Lágrimas do Sol', categoria: 'Drama' },
    { nome: 'O Pianista', categoria: 'Drama' },
    { nome: 'Um Sonho de Liberdade', categoria: 'Drama' },
    { nome: 'Aventura Espacial', categoria: 'Ação' },
    { nome: 'Perseguição Implacável', categoria: 'Ação' },
    { nome: 'Operação Resgate', categoria: 'Ação' },
    { nome: 'Riso Contagioso', categoria: 'Comédia' },
    { nome: 'Festa Maluca', categoria: 'Comédia' },
    { nome: 'Encontro de Risos', categoria: 'Comédia' },
    { nome: 'Caminho da Esperança', categoria: 'Drama' },
    { nome: 'Luz no Fim', categoria: 'Drama' },
    { nome: 'Destino Incerto', categoria: 'Drama' },
    { nome: 'Escolhas da Vida', categoria: 'Drama' },
  ];

  categoriaSelecionada = '';
  filmesFiltrados = this.filmes;

  filtrarFilmes() {
    this.filmesFiltrados = this.filmes.filter(filme =>
      this.categoriaSelecionada ? filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase() : true
    );
  }
}
