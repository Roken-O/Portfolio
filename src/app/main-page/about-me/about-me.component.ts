import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  ngOnInit() {
    console.log('AOS initialisiert');
    AOS.init();
  }
  isGerman: boolean = false;

  constructor(private translate: TranslateService) {

    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });


    // this.isGerman = this.translate.currentLang === 'de';
  }
}
