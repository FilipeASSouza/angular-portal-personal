import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from '../../componentes/container/container.component';
import { Aluno } from '../../interfaces/aluno';

@Component({
  selector: 'app-perfil-aluno',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent
  ],
  templateUrl: './perfil-aluno.component.html',
  styleUrl: './perfil-aluno.component.css'
})
export class PerfilAlunoComponent {

  aluno:Aluno = {
    id:0,
    nome:'teste',
    telefone:'31 99999-9999',
    dataAniversario:'2021-12-11',
    observacoes:'teste'
  }
}
