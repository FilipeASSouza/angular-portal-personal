import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from '../../componentes/container/container.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { AlunosComponent } from '../../componentes/alunos/alunos.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { AlunoService } from '../../services/aluno.service';

interface Aluno {
  id: number,
  nome: string,
  telefone: string
}

@Component({
  selector: 'app-lista-alunos',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    AlunosComponent,
    FormsModule,
    RouterLink
  ],
  templateUrl: './lista-alunos.component.html',
  styleUrl: './lista-alunos.component.css'
})

export class ListaAlunosComponent implements OnInit{

  alfabeto:string = 'abcdefghijklmnopqrstuvwxyz';
  alunos:Aluno[] = [];

  constructor(private alunoService: AlunoService){}

  ngOnInit(): void {
    this.alunos = this.alunoService.obterAlunos();
  }

  filtroPorTexto:string = '';

  private removerAcentos(texto: string) :string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarAlunoPorTexto() :Aluno[] {
    if(!this.filtroPorTexto){
      return this.alunos;
    }

    return this.alunos.filter( aluno => {
      return this.removerAcentos(aluno.nome).toLowerCase().includes(this.filtroPorTexto.toLowerCase())
    })
  }

  filtrarListaAlunosPorLetraInicial(letra:string) :Aluno[]{
    return this.filtrarAlunoPorTexto().filter( aluno => {
      return this.removerAcentos(aluno.nome).toLowerCase().startsWith(letra)
    });
  }

}
