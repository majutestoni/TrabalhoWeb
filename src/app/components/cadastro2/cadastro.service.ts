import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_API = 'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro';

@Injectable({
  providedIn: 'root',
})
export class CadastroService {
  constructor(private http: HttpClient) {}

  public consulta(id: string): Observable<Funcionario2> {
    return this.http.get<Funcionario2>(`${URL_API}/${id}`);
  }

  public deletar(): Observable<Deletar> {
    return this.http.delete<Deletar>(`${URL_API}`);
  }

  public update(): Observable<Deletar> {
    return this.http.put<Deletar>(`${URL_API}`, {});
  }
}

export interface Funcionario2 {
  id: string;
  nome: string;
  departamento: string;
  endereco: string;
  email: string;
}

export interface Deletar {
  status: string;
  mensagem: string;
}
