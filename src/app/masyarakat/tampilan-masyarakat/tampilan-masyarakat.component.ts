import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tampilanMasyarakat } from '../masyarakat.model';
import { MasyarakatService } from '../masyarakat.service';

@Component({
  selector: 'app-tampilan-masyarakat',
  templateUrl: './tampilan-masyarakat.component.html',
  styleUrls: ['./tampilan-masyarakat.component.css']
})
export class TampilanMasyarakatComponent implements OnInit {

  tampilanMasyarakat = new tampilanMasyarakat ()
  constructor(private router : Router, private masyarakatService : MasyarakatService) { }

  ngOnInit(): void {
  }

  diterima(){
    this.router.navigate([''])
  }
  
  masuk(){
    let alamat = this.tampilanMasyarakat
    if(this.tampilanMasyarakat){
     this.masyarakatService.tampilanMasyarakat(alamat).subscribe(response => {
      if(response== 200){
        alert("Berhasil Menyimpan Keluhan")
        this.router.navigate(['terkirim-masyarakat'])
      }else{
        alert("Gagal Menyimpan Keluhan")
      }
     })
   }
   }

   lanjut(){
    alert("Berhasil Menyimpan Keluhan")
    this.router.navigate(['terkirim-masyarakat'])
  }

}
