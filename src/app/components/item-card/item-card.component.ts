import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent {
  @Input() title: string = 'Nombre';
  @Input() subtitle: string = 'text';
  @Input() image: string = '../../../assets/img/no-img.jpg';
}
