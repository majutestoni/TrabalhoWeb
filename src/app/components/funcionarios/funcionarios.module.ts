import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionariosComponent } from './funcionarios.component';
import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { FuncionariosService } from './funcionarios.service';

@NgModule({
  declarations: [FuncionariosComponent],
  providers: [FuncionariosService],
  imports: [CommonModule, FuncionariosRoutingModule, CardModule],
})
export class FuncionariosModule {}
