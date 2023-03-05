import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CookingComponent } from './components/cooking/cooking.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EducationComponent } from './components/education/education.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamingComponent } from './components/gaming/gaming.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VloggingComponent } from './components/vlogging/vlogging.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    CookingComponent,
    DashboardComponent,
    EducationComponent,
    EntertainmentComponent,
    FeaturesComponent,
    FooterComponent,
    GamingComponent,
    LandingPageComponent,
    NavbarComponent,
    VloggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot(env.auth)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
