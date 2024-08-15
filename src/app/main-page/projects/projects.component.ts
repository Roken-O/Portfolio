import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects = [
    {
      'name': 'Join',
      'img' : './../../../assets/img/join.png',
      'techs' : ['Firebase', 'JavaScript', 'CSS', 'HTML'], 
      'description' :'projects.join.description',
      'button1': 'Live test',
      'button2' : 'Github'
    },
    {
      'name': 'El Pollo Loco',
      'img' : './../../../assets/img/el-pollo-loco-game.png',
      'techs' : ['JavaScript', 'CSS', 'HTML'], 
      'description' :'projects.elPolloLoco.description',
      'button1': 'Live test',
      'button2' : 'Github'
    },
    {
      'name': 'Pokédex',
      'img' : './../../../assets/img/pokemon.png',
      'techs' : ['Api', 'JavaScript', 'CSS', 'HTML'], 
      'description' :'projects.pokedex.description',
      'button1': 'Live test',
      'button2' : 'Github'
    },
  ];

}
