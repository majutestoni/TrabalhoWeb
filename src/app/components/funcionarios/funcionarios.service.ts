import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FuncionariosService {
  constructor(private http: HttpClient) {}

  getFuncionarios(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>('assets/funcionarios.json')
  }
}

export interface Funcionario {
  id: number;
  nome: string;
  foto: string;
  email: string;
  subobjeto: {
    propriedade1: string;
    propriedade2: string;
  };
}
