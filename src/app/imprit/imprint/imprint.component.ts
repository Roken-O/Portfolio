import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../../shared/footer/footer.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [RouterModule, FooterComponent, TranslateModule],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {

}
