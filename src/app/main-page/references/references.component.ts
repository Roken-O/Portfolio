import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  currentIndex = 0;
  referance = [
    {
      name: 'Bünyamin Tig',
      img: './../../../assets/img/büny-img.png',
      ref: 'references.bünyamin.ref',
    },
    {
      name: 'Karina Tanei',
      img: './../../../assets/img/karina-img.jpg',
      ref: 'references.karina.ref',
    },
    {
      name: 'Bilal Urgun',
      img: './../../../assets/img/d-blue1.png',
      ref: 'references.bilal.ref',
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
