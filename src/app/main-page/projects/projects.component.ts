import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      'name': 'Join',
      'img' : './../../../assets/img/join.png',
      'techs' : ['Firebase', 'JavaScript', 'CSS', 'HTML'], 
      'description' :'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      'button1': 'Live test',
      'button2' : 'Github'
    },
    {
      'name': 'El Pollo Loco',
      'img' : './../../../assets/img/el-pollo-loco-game.png',
      'techs' : ['JavaScript', 'CSS', 'HTML'], 
      'description' :'An object-oriented jump, run, and throw game. Help Pepe find coins and Tabasco salsa to battle the crazy hen',
      'button1': 'Live test',
      'button2' : 'Github'
    },
    {
      'name': 'Pokédex',
      'img' : './../../../assets/img/pokemon.png',
      'techs' : ['Api', 'JavaScript', 'CSS', 'HTML'], 
      'description' :'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      'button1': 'Live test',
      'button2' : 'Github'
    },
  ];

}
