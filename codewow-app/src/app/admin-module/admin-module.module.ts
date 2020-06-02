import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [AdminLoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ],
  providers: [],
  bootstrap: [AdminLoginComponent],
  exports:[AdminLoginComponent],
})
export class AdminModuleModule { }
