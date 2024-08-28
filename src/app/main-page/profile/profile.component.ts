import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  isGerman: boolean = false;

  @ViewChild('animatedText', { static: true }) animatedText!: ElementRef<HTMLHeadingElement>;
  @ViewChild('animatedSpan', { static: true }) animatedSpan!: ElementRef<HTMLSpanElement>;

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe((event) => {
      this.isGerman = event.lang === 'de';
    });
  }

  ngOnInit() {
    this.startTypingEffect();
  }

  startTypingEffect() {
    const h1Text = 'Roken Othman';
    const spanText = this.isGerman ? 'Frontend Entwicklerin' : 'Frontend Developer';;
    this.typeText(this.animatedText.nativeElement, h1Text, 150, () => {
      this.typeText(this.animatedSpan.nativeElement, spanText, 150);
    });
  }

  typeText(element: HTMLElement, text: string, delay: number, callback?: () => void) {
    let index = 0;
    element.innerHTML = '';

    const type = () => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, delay);
      } else if (callback) {
        setTimeout(callback, delay);
      } else {
        setTimeout(() => this.startTypingEffect(), delay * 10);
      }
    };

    type();
  }
}