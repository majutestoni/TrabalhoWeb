import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() linkFoto = '';
  @Input() nome = '';
  @Input() propriedade1 = '';
  @Input() propriedade2 = '';
  @Input() email = '';

  redirectToOutlook(): void {
    const email = 'seuemail@dominio.com';
    window.location.href = `https://outlook.live.com/owa/?path=/mail/action/compose&to=${email}`;
  }
}
