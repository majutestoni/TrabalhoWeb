
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Cadastro2Component } from './cadastro2.component';


const routes: Routes = [{ path: '', component: Cadastro2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cadastro2RoutingModule {}
