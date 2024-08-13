import { Routes } from '@angular/router';

import { FormularioAlunoComponent } from './paginas/formulario-aluno/formulario-aluno.component';
import { ListaAlunosComponent } from './paginas/lista-alunos/lista-alunos.component';
import { PerfilAlunoComponent } from './paginas/perfil-aluno/perfil-aluno.component';

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
    },
    {
        path:'perfil-aluno/:id',
        component:PerfilAlunoComponent
    }
];
