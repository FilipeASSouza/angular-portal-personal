import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { AlunoService } from '../../services/aluno.service';
import { MensagemErroComponent } from '../../componentes/mensagem-erro/mensagem-erro.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';

@Component({
  selector: 'app-formulario-aluno',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SeparadorComponent,
    ReactiveFormsModule,
    RouterLink,
    MensagemErroComponent,
    CabecalhoComponent
  ],
  templateUrl: './formulario-aluno.component.html',
  styleUrl: './formulario-aluno.component.css'
})

export class FormularioAlunoComponent implements OnInit{

  alunoForm!:FormGroup;

  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.inicializarFormulario(); 
   this.carregarAluno();
  }

  inicializarFormulario() {

    this.alunoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      dataAniversario: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  carregarAluno(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.alunoService.buscarPorId(parseInt(id)).subscribe((aluno) => {
        this.alunoForm.patchValue(aluno);
      });
    }
  }

  salvarAluno() {
    const novoAluno = this.alunoForm.value;
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    novoAluno.id = id ? parseInt(id) : null;

    this.alunoService.editarOuSalvarAluno(novoAluno).subscribe(() =>{
      this.alunoForm.reset();
      this.router.navigateByUrl('/lista-alunos');
    })
  }

  aoSelecionarArquivo(event:any){
    const file:File = event.target.files[0];
    if(file){
      this.lerArquivo(file)
    }
  }

  lerArquivo(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.result){
        this.alunoForm.get('avatar')?.setValue(reader.result);
      }
    }
    reader.readAsDataURL(file);
  }

  cancelar() {
    this.alunoForm.reset();
    this.router.navigateByUrl('/lista-alunos');
  }

  obterControle(nome:string) :FormControl {
    const control = this.alunoForm.get(nome);

    if(!control){
      throw new Error('Controle de formulario não encontrado: '+nome);
    }
    return control as FormControl;
  }

}
