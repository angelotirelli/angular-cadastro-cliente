import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarClienteComponent } from './pages/cadastrar-cliente/cadastrar-cliente.component';
import { EditarClienteComponent } from './pages/editar-cliente/editar-cliente.component';
import { DetalhesClienteComponent } from './pages/detalhes-cliente/detalhes-cliente.component';


const routes: Routes = [
  {path: 'cadastrar-cliente', component: CadastrarClienteComponent},
  {path: '', component: HomeComponent},
  {path: 'editar-cliente/:id', component: EditarClienteComponent},
  {path: 'detalhes-cliente/:id', component: DetalhesClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
