import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import {ServicesComponent} from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import {ContactComponent} from './contact/contact.component';
import { TrainingComponent } from './training/training.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';


//routes created for front end
const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'services', component: ServicesComponent },
  // { path: 'blog', component: BlogComponent},
  // { path:'training',component:TrainingComponent},
  // { path:'bootcamp',component:BootcampComponent},
  // { path:'contact',component:ContactComponent},
  // { path:'', redirectTo: '/home', pathMatch: 'full' },


  //below one added for admin module
  {
    path: 'admin',
    loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule)
  },

  {
    path: '',
    loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule)

  }



];
//https://stackoverflow.com/questions/44226608/how-to-separate-admin-and-the-front-web-in-angular-2-project
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}