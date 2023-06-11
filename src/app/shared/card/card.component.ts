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

  abrirOutlook(): void {
    window.open('https://outlook.com', '_blank');
  }
}
