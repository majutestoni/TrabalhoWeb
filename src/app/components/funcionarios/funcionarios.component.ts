import { Component, OnInit } from '@angular/core';
import { FuncionariosService } from './funcionarios.service';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss'],
  providers: [ FuncionariosService]
})
export class FuncionariosComponent implements OnInit {
  constructor(private service: FuncionariosService) {}

  ngOnInit(): void {
    this.service.getFuncionarios().subscribe((e) => console.log(e));
  }
}
