import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Cadastro2Component } from './cadastro2/cadastro2.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, Cadastro2Component],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class ComponentsModule {}
