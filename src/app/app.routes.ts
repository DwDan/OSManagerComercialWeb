import { Routes } from '@angular/router';
import { LandingComponent } from '@pages/landing/landing.component';
import { SignupComponent } from '@pages/signup/signup.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', redirectTo: '' },
];
