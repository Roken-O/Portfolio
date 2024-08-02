import { Component } from '@angular/core';
import { AboutMeComponent } from "./about-me/about-me.component";
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReferencesComponent } from "./references/references.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [AboutMeComponent, SkillsComponent, ProjectsComponent, ContactComponent, ProfileComponent, ReferencesComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
