import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

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
    AlunosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  alfabeto:string = 'abcdefghijklmnopqrstuvwxyz';
  alunos:Aluno[] = listaAlunos;

  filtrarListaAlunosPorLetraInicial(letra:string) :Aluno[]{
    return this.alunos.filter( aluno => {
      return aluno.nome.toLowerCase().startsWith(letra)
    });
  }

}
