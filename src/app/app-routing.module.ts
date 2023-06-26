import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastro2Component } from './components/cadastro2/cadastro2.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./components/funcionarios/funcionarios.module').then(
        (m) => m.FuncionariosModule
      ),
  },
  {
    path: 'cadastro2',
    loadChildren: () =>
      import('./components/cadastro2/cadastro2.module').then(
        (m) => m.Cadastro2Module
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
