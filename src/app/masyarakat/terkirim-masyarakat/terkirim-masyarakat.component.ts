import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terkirim-masyarakat',
  templateUrl: './terkirim-masyarakat.component.html',
  styleUrls: ['./terkirim-masyarakat.component.css']
})
export class TerkirimMasyarakatComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  diterima(){
    this.router.navigate([''])
  }

}
