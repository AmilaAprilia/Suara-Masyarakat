import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(
    private router:Router, 
    private AdminServive : AdminService) { }

  ngOnInit(): void {
  }

  diterima(){
    this.router.navigate([''])
  }

  oke(){
    this.router.navigate(['admin-keluhan'])
  }

}
