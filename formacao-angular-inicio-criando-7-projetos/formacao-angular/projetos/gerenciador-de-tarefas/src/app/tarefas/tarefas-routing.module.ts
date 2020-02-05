import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar-tarefa';
import { CadastrarTarefaComponent } from './cadastrar-tarefa';

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar-tarefa'
    },
    {
        path: 'tarefas/listar-tarefa',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/castrar-tarefa',
        component: CadastrarTarefaComponent
    }
];