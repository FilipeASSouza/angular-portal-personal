import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { FormularioAlunoComponent } from './paginas/formulario-aluno/formulario-aluno.component';
import { ListaAlunosComponent } from './paginas/lista-alunos/lista-alunos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormularioAlunoComponent,
    ListaAlunosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent { }
