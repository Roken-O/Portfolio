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
      'button1': 'https://roken-othman.de/join/index.html',
      'button2' : 'https://github.com/Roken-O/Join-Kanban-Board---G.4'
    },
    {
      'name': 'El Pollo Loco',
      'img' : './../../../assets/img/el-pollo-loco-game.png',
      'techs' : ['JavaScript', 'CSS', 'HTML'], 
      'description' :'projects.elPolloLoco.description',
      'button1': 'https://roken-othman.de/el-pollo-loco/index.html',
      'button2' : 'https://github.com/Roken-O/-EL-POLLO-LOCO'
    },
    {
      'name': 'Pokédex',
      'img' : './../../../assets/img/pokemon.png',
      'techs' : ['Api', 'JavaScript', 'CSS', 'HTML'], 
      'description' :'projects.pokedex.description',
      'button1': 'https://roken-othman.de/pokedex/index.html',
      'button2' : 'https://github.com/Roken-O/Pokedex'
    },
  ];

}
