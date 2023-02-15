import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginMasyarakatComponent } from './login-masyarakat/login-masyarakat.component';
import { TampilanMasyarakatComponent } from './tampilan-masyarakat/tampilan-masyarakat.component';
import { TerkirimMasyarakatComponent } from './terkirim-masyarakat/terkirim-masyarakat.component';



@NgModule({
  declarations: [LoginMasyarakatComponent, TampilanMasyarakatComponent, TerkirimMasyarakatComponent],
  imports: [
    CommonModule
  ]
})
export class MasyarakatModule { }
