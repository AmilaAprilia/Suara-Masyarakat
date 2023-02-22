import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-keluhan',
  templateUrl: './admin-keluhan.component.html',
  styleUrls: ['./admin-keluhan.component.css']
})
export class AdminKeluhanComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  diterima(){
    this.router.navigate([''])
  }  

  print(){
    alert("Berhasil Print")
  }

  logout(){
    alert("Logout")
    this.router.navigate([''])
  }
}

