import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationService } from '../../translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  currentLanguage = 'de';
  currentFlag = 'english.png';
  translate = inject(TranslationService)
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
    this.currentLanguage = language;

    if (language === 'en') {
      this.currentLanguage = 'de';
      this.currentFlag = 'english.png';
    } else if (language === 'de') {
      this.currentLanguage = 'en';
      this.currentFlag = 'german.png';
    }
  }
}
