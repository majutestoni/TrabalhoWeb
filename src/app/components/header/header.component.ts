import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navegarHome(): void {
    this.router.navigateByUrl('/home');
  }

  navegarFuncionarios(): void {
    this.router.navigateByUrl('/funcionarios');
  }

  navegarCadastro2(): void {
    this.router.navigateByUrl('/cadastro2');
  }
}
