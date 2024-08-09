import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ImprintComponent } from './imprit/imprint/imprint.component';

export const routes: Routes = [
    { path :'', component : MainPageComponent },
    { path :'imprint', component : ImprintComponent },
];
