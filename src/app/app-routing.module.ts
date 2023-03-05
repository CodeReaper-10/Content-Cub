import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CookingComponent } from './components/cooking/cooking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EducationComponent } from './components/education/education.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { FeaturesComponent } from './components/features/features.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { VloggingComponent } from './components/vlogging/vlogging.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'gaming', canActivate: [AuthGuard], component: GamingComponent },
  { path: 'education', canActivate: [AuthGuard], component: EducationComponent },
  { path: 'cooking', canActivate: [AuthGuard], component: CookingComponent },
  { path: 'entertainment', canActivate: [AuthGuard], component: EntertainmentComponent },
  { path: 'vlogging', canActivate: [AuthGuard], component: VloggingComponent },
  { path: 'features', canActivate: [AuthGuard], component: FeaturesComponent },
  { path: 'contact-us', canActivate: [AuthGuard], component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
