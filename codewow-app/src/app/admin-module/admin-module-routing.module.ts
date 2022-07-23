import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminNavigationComponent } from './admin-navigation/admin-navigation.component';


//Ref https://angular.io/guide/lazy-loading-ngmodules
//@Todo  Anoop gaurd need to be applied
//https://stackoverflow.com/questions/44226608/how-to-separate-admin-and-the-front-web-in-angular-2-project
// const routes: Routes = [
//   { path: 'admin', component: AdminLoginComponent },
//   {path: 'admin-dashboard', component: AdminDashboardComponent }
 
// ];


// const routes: Routes = [
//   {

//     path: '',
//     component: AdminLoginComponent,
//     children: [
//       {
//         path: 'login',
//         //loadChildren: 'app/+admin-area/pages/+login/login.module#LoginModule'
//         //loadChildren: () => import('./admin-login/admin-login.component').then(m => m.AdminLoginComponent)
//        component: AdminLoginComponent 
//        // loadChildren: './admin-login/admin-login.component.html'
//       },
//       {
//         path: 'dashboard',
//         component: AdminNavigationComponent 
//         //loadChildren: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
//         //canLoad: [AuthGuardService]
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
            path: 'login',
            //loadChildren: 'app/+admin-area/pages/+login/login.module#LoginModule'
            //loadChildren: () => import('./admin-login/admin-login.component').then(m => m.AdminLoginComponent)
           component: AdminLoginComponent 
           // loadChildren: './admin-login/admin-login.component.html'
          },

          {
            path: '',
            //loadChildren: 'app/+admin-area/pages/+login/login.module#LoginModule'
            //loadChildren: () => import('./admin-login/admin-login.component').then(m => m.AdminLoginComponent)
           component: AdminLoginComponent 
           // loadChildren: './admin-login/admin-login.component.html'
          },
          {
            path: 'dashboard',
            component: AdminNavigationComponent 
            //loadChildren: () => import('./admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
            //canLoad: [AuthGuardService]
          }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
