import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginMasyarakat } from '../masyarakat.model';
import { MasyarakatService } from '../masyarakat.service';

@Component({
  selector: 'app-login-masyarakat',
  templateUrl: './login-masyarakat.component.html',
  styleUrls: ['./login-masyarakat.component.css']
})
export class LoginMasyarakatComponent implements OnInit {

  loginMasyarakat = new loginMasyarakat ()

  constructor(
    private router: Router, 
    private masyarakatService: MasyarakatService) 
    { }

  ngOnInit(): void {
  }

  submit(){
   let masyarakat : loginMasyarakat = this.loginMasyarakat
   if(this.loginMasyarakat){
    this.masyarakatService.loginMasyarakat(masyarakat).subscribe(Response => {
      if(Response.status== 200){
        alert("Berhasil Login")
        this.router.navigate(['/','tampilan-masyarakat'])
      }else{
        alert("Gagal Login")
      }
    })
  }
}
  tampilan(){
    this.router.navigate(['tampilan-masyarakat'])
  }

  diterima(){
    this.router.navigate([''])
  }  
}
