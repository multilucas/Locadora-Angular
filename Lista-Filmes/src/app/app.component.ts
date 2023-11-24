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
    { nome: 'Filme 1', categoria: 'Ação' },
    { nome: 'Filme 2', categoria: 'Comédia' },
    { nome: 'Filme 3', categoria: 'Drama' },
    { nome: 'Filme 1', categoria: 'Ação' },
    { nome: 'Filme 2', categoria: 'Comédia' },
    { nome: 'Filme 3', categoria: 'Drama' },
    { nome: 'Filme 1', categoria: 'Ação' },
    { nome: 'Filme 2', categoria: 'Comédia' },
    { nome: 'Filme 3', categoria: 'Drama' },
    { nome: 'Filme 1', categoria: 'Ação' },
    { nome: 'Filme 2', categoria: 'Comédia' },
    { nome: 'Filme 3', categoria: 'Drama' },
  ];

  categoriaSelecionada = '';
  filmesFiltrados = this.filmes;

  filtrarFilmes() {
    this.filmesFiltrados = this.filmes.filter(filme =>
      this.categoriaSelecionada ? filme.categoria.toLowerCase() === this.categoriaSelecionada.toLowerCase() : true
    );
  }
}
