import { Component } from '@angular/core';
import { Classmate } from 'src/app/models/user.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  classmates : Classmate[]= [
    {
      name : 'Alejandra Murillo',
      hobbies : ['Cocinar', 'Natación', 'Musica', 'Aprender nuevas cosas'],
      avatar : '../../../assets/img/team/alejandra.jpg'
    },
    {
      name : 'Yagzon Guerrero',
      hobbies : ['Montar a caballo', 'Jugar Futbol'],
      avatar : '../../../assets/img/team/yagzon.jpg'
    },
    {
      name : 'Williams Yujra',
      hobbies : ['DIY Tools', 'Robótica'],
      avatar : '../../../assets/img/team/willyams.jpg'
    },
    {
      name : 'Snyder Q',
      hobbies : ['Musica', 'Programar', 'Cocinar'],
      avatar : '../../../assets/img/team/snyder.jpg'
    },
  ]

}
