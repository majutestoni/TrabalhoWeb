import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cadastro2Component } from './cadastro2.component';
import { CadastroService } from './cadastro.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Cadastro2RoutingModule } from './cadastro2-routing.module';





@NgModule({
  declarations: [Cadastro2Component],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    Cadastro2RoutingModule
  ],
  providers:[CadastroService]
})
export class Cadastro2Module { }
