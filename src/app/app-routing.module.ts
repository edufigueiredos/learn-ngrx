import { DetalhesUsuarioComponent } from './detalhes-usuario/detalhes-usuario.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'detalhes-usuario', component: DetalhesUsuarioComponent },
  { path: 'todos', component: TodoComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
