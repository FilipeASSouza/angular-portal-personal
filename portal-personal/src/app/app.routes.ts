import { Routes } from '@angular/router';

import { FormularioAlunoComponent } from './paginas/formulario-aluno/formulario-aluno.component';
import { ListaAlunosComponent } from './paginas/lista-alunos/lista-alunos.component';

export const routes: Routes = [
    {
        path:'formulario',
        component:FormularioAlunoComponent
    },
    {
        path:'lista-alunos',
        component:ListaAlunosComponent
    },
    {
        path:'',
        redirectTo:'lista-alunos',
        pathMatch: 'full'
    }
];
