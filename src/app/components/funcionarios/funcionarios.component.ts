import { Component, OnInit } from '@angular/core';
import { Funcionario, FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
  providers: [FuncionariosService],
})
export class FuncionariosComponent implements OnInit {
  public funcionarios: Funcionario[] = [];

  constructor(private service: FuncionariosService) {}

  ngOnInit(): void {
    this.service.getFuncionarios().subscribe((e) => (this.funcionarios = e));
  }
}
