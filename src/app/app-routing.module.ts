import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminKeluhanComponent } from './admin/admin-keluhan/admin-keluhan.component';
import { LoginAdminComponent } from './admin/login-admin/login-admin.component';
import { LoginMasyarakatComponent } from './masyarakat/login-masyarakat/login-masyarakat.component';
import { TampilanMasyarakatComponent } from './masyarakat/tampilan-masyarakat/tampilan-masyarakat.component';
import { TerkirimMasyarakatComponent } from './masyarakat/terkirim-masyarakat/terkirim-masyarakat.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: 'admin-keluhan', component: AdminKeluhanComponent},
  {path: 'terkirim-masyarakat', component: TerkirimMasyarakatComponent},
  {path: 'tampilan-masyarakat', component: TampilanMasyarakatComponent},
  {path: 'login-masyarakat', component: LoginMasyarakatComponent},
  {path: 'login-admin', component: LoginAdminComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
