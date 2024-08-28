import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  showError = false;
  sendEmailConfirmation = false;
  isPrivacyPolicyAccepted = false;
  http = inject(HttpClient);

  post = {
    endPoint: 'https://roken-othman.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (!this.contactData.name || !this.contactData.email || !this.contactData.message || !this.isPrivacyPolicyAccepted) {
      this.showError = true;
    } else if (ngForm.submitted && ngForm.form.valid) {
      this.sendEmailConfirmation = true;
      setInterval(()=>{
        this.sendEmailConfirmation = false;
      }, 2300);
      this.http.post(this.post.endPoint, this.post.body(this.contactData)).subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }
  closePopup() {
    this.showError = false;
  } 
}
