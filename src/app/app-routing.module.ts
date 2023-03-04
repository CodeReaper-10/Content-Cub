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

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'gaming', component: GamingComponent },
  { path: 'education', component: EducationComponent },
  { path: 'cooking', component: CookingComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'vlogging', component: VloggingComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
