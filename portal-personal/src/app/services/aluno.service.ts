import { Injectable } from '@angular/core';

interface Aluno {
  id: number,
  nome: string,
  telefone: string,
  dataAniversario: string,
  observacoes: string
}

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunos:Aluno[] = [
    {"id":1, "nome":"Filipe", "telefone":"31 99999-9999", "dataAniversario":"2024-07-04", "observacoes":"TESTE"},
    {"id":2, "nome":"Erlon", "telefone":"31 99999-9999", "dataAniversario":"2024-02-04", "observacoes":"TESTE"}
  ]

  constructor() { 
    
    const alunosLocalStorageString = localStorage.getItem('alunos');
    const alunosLocalStorage = alunosLocalStorageString ? JSON.parse(alunosLocalStorageString) : null;

    if(alunosLocalStorage !== null){
      this.alunos = alunosLocalStorage || null;
    }

    localStorage.setItem('alunos', JSON.stringify(this.alunos));
  }

  obterAlunos() {
    return this.alunos;
  }

  gravarAluno(aluno:Aluno) {
    this.alunos.push(aluno);
    localStorage.setItem('alunos', JSON.stringify(this.alunos));
  }
}
