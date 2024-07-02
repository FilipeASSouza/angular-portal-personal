import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { AlunosComponent } from './componentes/alunos/alunos.component';

interface Aluno {
  id: number,
  nome: string,
  telefone: string
}

import listaAlunos from './alunos.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    AlunosComponent,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  alfabeto:string = 'abcdefghijklmnopqrstuvwxyz';
  alunos:Aluno[] = listaAlunos;

  filtroPorTexto:string = '';

  filtrarAlunoPorTexto() :Aluno[] {
    if(!this.filtroPorTexto){
      return this.alunos;
    }

    return this.alunos.filter( aluno => {
      return aluno.nome.toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarListaAlunosPorLetraInicial(letra:string) :Aluno[]{
    return this.filtrarAlunoPorTexto().filter( aluno => {
      return aluno.nome.toLowerCase().startsWith(letra)
    });
  }

}
