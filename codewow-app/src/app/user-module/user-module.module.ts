import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserAboutComponent } from './user-about/user-about.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserServicesComponent } from './user-services/user-services.component';
import { UserTrainingComponent } from './user-training/user-training.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: UserHomeComponent,
//     children: [
      
//       {
//         path: 'home',
//         component: UserHomeComponent
//         //loadChildren: () => import('./user-home/user-home.component').then(m => m.UserHomeComponent)
//         //canLoad: [AuthGuardService]
//       },

//       {
//         path: 'services',
//         component: UserServicesComponent
//         //loadChildren: () => import('./user-services/user-services.component').then(m => m.UserServicesComponent)
//         //canLoad: [AuthGuardService]
//       },

//       {
//         path: 'about',
//         component: UserAboutComponent
//         //loadChildren: () => import('./user-about/user-about.component').then(m => m.UserAboutComponent)
//         //canLoad: [AuthGuardService]
//       }

//     ]
//   }
// ];

const routes: Routes = [



  // {
  //   path: 'home',
  //   component: UserHomeComponent
  //   //loadChildren: () => import('./user-home/user-home.component').then(m => m.UserHomeComponent)
  //   //canLoad: [AuthGuardService]
  // },

  { path:'', redirectTo: '/home', pathMatch: 'full' },

      {
        path: 'home',
        component: UserHomeComponent
        //loadChildren: () => import('./user-home/user-home.component').then(m => m.UserHomeComponent)
        //canLoad: [AuthGuardService]
      },

      {
        path: 'services',
        component: UserServicesComponent
        //loadChildren: () => import('./user-services/user-services.component').then(m => m.UserServicesComponent)
        //canLoad: [AuthGuardService]
      },

      {
        path: 'about',
        component: UserAboutComponent
        //loadChildren: () => import('./user-about/user-about.component').then(m => m.UserAboutComponent)
        //canLoad: [AuthGuardService]
      }

]

@NgModule({
  declarations: [UserHomeComponent, UserAboutComponent, UserHeaderComponent, UserServicesComponent, UserTrainingComponent],
  imports: [
    CommonModule,
   RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [UserHomeComponent],
  exports:[UserHomeComponent],
})
export class UserModuleModule { }
