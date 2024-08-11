import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  currentIndex = 0;
  referance = [
    {
      name: 'Bünyamin Tig',
      img: './../../../assets/img/büny-img.png',
      ref: 'Roken ist eine äußerst zuverlässige und lösungsorientierte Person. Die Zusammenarbeit mit ihr macht großen Spaß, da sie stets motiviert und engagiert ist. Sie kann stundenlang fokussiert arbeiten und ist dabei immer hilfsbereit. Ihre Unterstützung und ihr Einsatz sind von unschätzbarem Wert.',
    },
    {
      name: 'Karina Tanei',
      img: './../../../assets/img/karina-img.jpg',
      ref: 'Roken durchschaut sehr schnell fremden Javascript-Code und implementiert sofort ihre Änderungen. Dabei ist sie in ihrer Haltung immer positiv, freundlich und optimistisch. Kurz gesagt: Ich finde Rokens Arbeit und ihre warmherzige Persönlichkeit einfach faszinierend. Auch in anderen Projekten war ich stets von ihren Ergebnissen überrascht, sie ist für mich ein Vorbild!',
    },
    {
      name: 'Bilal Urgun',
      img: './../../../assets/img/büny-img.png',
      ref: 'Ich habe am digitalen Rezeptbuch-Projekt "Kochwelt" mit Roken gearbeitet. In diesem Projekt haben wir zu dritt zusammengearbeitet und jeder hat gleichermaßen zum Erfolg beigetragen. Roken war eine wertvolle Teamkollegin, deren Einsatz und Zusammenarbeit ich sehr geschätzt habe. Sie zeigte stets große Sorgfalt in ihrer Arbeit und unterstützte das Team mit ihrem technischen Know-how. Rokens Engagement und ihre Fähigkeit, komplexe Aufgaben effizient zu bewältigen, haben das Projekt wesentlich vorangebracht.',
    },
  ];

  previousReferance() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.referance.length - 1;
    }
  }

  nextReferance() {
    if (this.currentIndex < this.referance.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }
}
