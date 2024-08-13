import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Aluno } from '../interfaces/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private readonly API = 'http://localhost:3000/alunos';

  constructor(private http:HttpClient){ }

  obterAlunos() :Observable<Aluno[]>{
    return this.http.get<Aluno[]>(this.API);
  }

  gravarAluno(aluno:Aluno) {
    return this.http.post<Aluno>(this.API, aluno);
  }

  buscarPorId(id:number) :Observable<Aluno>{
    const url = `${this.API}/${id}`;
    return this.http.get<Aluno>(url);
  }

  excluirPorId(id:number) :Observable<Aluno>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Aluno>(url);
  }
}
