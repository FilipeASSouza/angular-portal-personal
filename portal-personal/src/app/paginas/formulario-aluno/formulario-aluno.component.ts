import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-formulario-aluno',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent
  ],
  templateUrl: './formulario-aluno.component.html',
  styleUrl: './formulario-aluno.component.css'
})

export class FormularioAlunoComponent {

}
