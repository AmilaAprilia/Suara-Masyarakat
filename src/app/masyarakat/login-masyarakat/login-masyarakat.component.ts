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
    private masyarakatService : MasyarakatService,
    private router : Router
    ){}

  ngOnInit(): void {}
    

  tampilan(){
   let username = this.loginMasyarakat
   if(this.loginMasyarakat){
    this.masyarakatService.loginMasyarakat(username).subscribe(response => {
      this.router.navigate(['tampilan-masyarakat'])
    })
  }
  }

  diterima(){
    this.router.navigate([''])
  }
}