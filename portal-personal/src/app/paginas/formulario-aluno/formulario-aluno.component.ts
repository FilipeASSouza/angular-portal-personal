import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';

@Component({
  selector: 'app-formulario-aluno',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './formulario-aluno.component.html',
  styleUrl: './formulario-aluno.component.css'
})

export class FormularioAlunoComponent implements OnInit{

  alunoForm!:FormGroup;

  ngOnInit(): void {
   this.inicializarFormulario(); 
  }

  inicializarFormulario() {

    this.alunoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      dataAniversario: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarAluno() {
    if(this.alunoForm.valid){
      console.log(this.alunoForm.value);
    }
  }

  cancelar() {
    console.log("Cancelado");
  }

}
