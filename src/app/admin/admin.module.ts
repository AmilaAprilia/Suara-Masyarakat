import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminKeluhanComponent } from './admin-keluhan/admin-keluhan.component';



@NgModule({
  declarations: [LoginAdminComponent, AdminKeluhanComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
