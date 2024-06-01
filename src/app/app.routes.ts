import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { AboutComponent } from './sections/about/about.component';

export const routes: Routes = [
    { path : '', component : HomeComponent },
    { path : 'about', component : AboutComponent },
];
