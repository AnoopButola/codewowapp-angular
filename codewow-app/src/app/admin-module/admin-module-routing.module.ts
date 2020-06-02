import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';


//Ref https://angular.io/guide/lazy-loading-ngmodules
//@Todo  Anoop gaurd need to be applied
//https://stackoverflow.com/questions/44226608/how-to-separate-admin-and-the-front-web-in-angular-2-project
const routes: Routes = [
  { path: 'login', component: AdminLoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
