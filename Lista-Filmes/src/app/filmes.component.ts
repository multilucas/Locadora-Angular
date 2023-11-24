// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule aqui

import { AppComponent } from './app.component';
import { FilmesComponent } from './filmes/filmes.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmesComponent,
    // ... outros componentes
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione esta linha
    // ... outros módulos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
