import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { Aluno } from '../../interfaces/aluno';
import { AlunoService } from '../../services/aluno.service';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';

@Component({
  selector: 'app-perfil-aluno',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    RouterLink,
    SeparadorComponent,
    CabecalhoComponent
  ],
  templateUrl: './perfil-aluno.component.html',
  styleUrl: './perfil-aluno.component.css'
})
export class PerfilAlunoComponent implements OnInit{

  aluno:Aluno = {
    id:0,
    nome:'',
    avatar:'',
    telefone:'',
    dataAniversario:'',
    observacoes:''
  }

  constructor(
    private activatedRoute:ActivatedRoute,
    private alunoService:AlunoService,
    private router:Router
  ){ }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.alunoService.buscarPorId(parseInt(id)).subscribe((aluno) => {
        this.aluno = aluno;
      });
    }
  }

  excluir(){
    if(this.aluno.id){
      this.alunoService.excluirPorId(this.aluno.id).subscribe(()=> {
        this.router.navigateByUrl('/lista-alunos');
      });
    }
  }

  editar(){
    if(this.aluno.id){
      this.router.navigate(['/formulario', this.aluno.id]);
    }
  }

}
