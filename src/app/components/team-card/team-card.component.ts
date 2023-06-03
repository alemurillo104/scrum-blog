import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent {

  @Input() name: string = 'Nombre';
  @Input() hobbies: string[] = ['a', 'b', 'c'];
  @Input() avatar: string = '../../../assets/img/no-img.jpg';

}
