import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MainbannerComponent } from './mainbanner/mainbanner.component';
import { MainbannerContentComponent } from './mainbanner-content/mainbanner-content.component';
import { MainbannerRegistrationComponent } from './mainbanner-registration/mainbanner-registration.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TrainingComponent } from './training/training.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';

//importing the adminModule so that we can add it to the imports array below

import { AdminModuleModule } from './admin-module/admin-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModuleModule } from './user-module/user-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Header1Component,
    Header2Component,
    FooterComponent,
    HomeComponent,
    MainbannerComponent,
    MainbannerContentComponent,
    MainbannerRegistrationComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    TrainingComponent,
    BootcampComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  
    AdminModuleModule,
    UserModuleModule,
    //RouterModule.forRoot(routes),
  
    BrowserAnimationsModule //adding admin module entry here so that appmodule knows it.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
