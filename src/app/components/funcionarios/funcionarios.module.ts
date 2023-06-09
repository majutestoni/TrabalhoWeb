import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';

@NgModule({
  declarations: [FuncionariosComponent],
  imports: [CommonModule, FuncionariosRoutingModule],
})
export class FuncionariosModule {}
