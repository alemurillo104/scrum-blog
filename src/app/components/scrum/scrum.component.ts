import { Component } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-scrum',
  templateUrl: './scrum.component.html',
  styleUrls: ['./scrum.component.css']
})
export class ScrumComponent {

  pilares : Item[] = [
    {
      title: 'Transparencia',
      subtitle: 'La visibilidad de la información utilizando un lenguaje entendible para todos.',
      image: '../../../assets/img/scrum/pilares/pilar3.jpg'
    },
    {
      title: 'Inspección',
      subtitle: 'Consiste en examinar frecuentemente los procesos.',
      image: '../../../assets/img/scrum/pilares/pilar1.jpg'
    },
    {
      title: 'Adaptación',
      subtitle: 'Es la capacidad de adaptarse en función de los resultados de la inspección, es cambiar para mejorar.',
      image: '../../../assets/img/scrum/pilares/pilar2.jpg'
    }
  ];

  ceremonias : Item[] = [
    {
      title: 'Sprint Planning',
      subtitle: 'Reunión de planificación donde se identifica el objetivo del Sprint y se crea el Sprint backlog.',
      image: '../../../assets/img/scrum/ceremonias/splanning.jpg'
    },
    {
      title: 'Sprint Daily Meetings',
      subtitle: 'Los miembros del equipo discuten de su progreso y notifican lo que realizarán durante el día.',
      image: '../../../assets/img/scrum/ceremonias/daily.jpg'
    },
    {
      title: 'Sprint Review',
      subtitle: 'Se realiza la demostración de los resultados obtenidos durante el Sprint. ',
      image: '../../../assets/img/scrum/ceremonias/sreview.jpg'
    },
    {
      title: 'Sprint Retrospective',
      subtitle: 'Permite al equipo de trabajo hacer un análisis de la forma de trabajo y mejoras futuras para el siguiente Sprint.',
      image: '../../../assets/img/scrum/ceremonias/sretrospective.jpg'
    }
  ];

  artefactos : Item[] = [
    {
      title: 'Product Backlog',
      subtitle: 'Plan o pila de producto. Requisitos globales del producto a desarrollar.',
      image: '../../../assets/img/scrum/artefactos/art1.jpg'
    },
    {
      title: 'Sprint Backlog',
      subtitle: 'Plan o pila de Sprint. La parte del Product Backlog a realizar en un Sprint.',
      image: '../../../assets/img/scrum/artefactos/art2.jpg'
    },
    {
      title: 'Incrementos del producto',
      subtitle: 'Resultado que se obtiene de cada Sprint.',
      image: '../../../assets/img/scrum/artefactos/art3.jpg'
    }
  ];

  team: Item[] = [
    {
      title: 'Scrum Master',
      subtitle: 'Rol principal de Scrum. Facilita el proceso y asegura que se sigan los principios y prácticas de Scrum.',
      image: '../../../assets/img/scrum/roles/sm.jpg'
    },
    {
      title: 'Development Team',
      subtitle: 'Equipo autoorganizado y multifuncional, responsable de entregar el trabajo planificado durante el Sprint.',
      image: '../../../assets/img/scrum/roles/team.jpg'
    },
    {
      title: 'Product Owner',
      subtitle: 'Responsable de definir y priorizar los requisitos del producto y colabora con el equipo de desarrollo.',
      image: '../../../assets/img/scrum/roles/po.jpg'
    },
  ]

}
