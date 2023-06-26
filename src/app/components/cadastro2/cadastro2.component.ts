import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro2',
  templateUrl: './cadastro2.component.html',
  styleUrls: ['./cadastro2.component.scss'],
})
export class Cadastro2Component implements OnInit {
  public fg: FormGroup;
  public formValues: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cadastroService: CadastroService
  ) {
    this.fg = this.fb.group({
      id: ['', Validators.required],
    });

    this.formValues = this.fb.group({
      id: ['', Validators.required],
      nome: [''],
      departamento: [''],
      endereco: [''],
      email: [''],
    });
  }

  ngOnInit(): void {}

  consultar() {
    if (this.fg.valid) {
      const formsValue = this.fg.value;
      this.cadastroService.consulta(formsValue.id).subscribe(
        (e) => {
          this.formValues.setValue({
            id: e.id,
            nome: e.nome,
            departamento: e.departamento,
            endereco: e.endereco,
            email: e.email,
          });
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }

  public delete() {
    this.cadastroService.deletar().subscribe((c) => {
      if (c.status == 'Ok') {
        //componente cor verde
      } else {
        //componente cor vermelha
      }
    });
  }
}
