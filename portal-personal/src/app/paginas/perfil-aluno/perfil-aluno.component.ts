import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { Aluno } from '../../interfaces/aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-perfil-aluno',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink
  ],
  templateUrl: './perfil-aluno.component.html',
  styleUrl: './perfil-aluno.component.css'
})
export class PerfilAlunoComponent implements OnInit{

  aluno:Aluno = {
    id:0,
    nome:'',
    telefone:'',
    dataAniversario:'',
    observacoes:''
  }

  constructor(
    private activatedRoute:ActivatedRoute,
    private alunoService:AlunoService
  ){ }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.alunoService.buscarPorId(parseInt(id)).subscribe((aluno) => {
        this.aluno = aluno;
      });
    }
  }

}
