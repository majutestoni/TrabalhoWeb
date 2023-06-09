import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor(private http: HttpClient) {}

  getFuncionarios(): Observable<Funcionario> {
    return this.http.get<Funcionario>('assets/funcionarios.json')
  }
}

export interface Funcionario {
  id: number;
  nome: String;
  foto: String;
  email: String;
  subobjeto: {
    propriedade1: String;
    propriedade2: String;
  };
}
