import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tampilan-masyarakat',
  templateUrl: './tampilan-masyarakat.component.html',
  styleUrls: ['./tampilan-masyarakat.component.css']
})
export class TampilanMasyarakatComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  terkirim(){
    this.router.navigate(['terkirim-masyarakat'])
  }

  diterima(){
    this.router.navigate([''])
  }
}
