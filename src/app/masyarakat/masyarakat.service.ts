import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { environment } from 'src/environments/environment';
import { loginMasyarakat, tampilanMasyarakat } from './masyarakat.model';
type NewType = {
  nama: string;
  alamat: string;
  nik: number;
  nomor: number;
};

@Injectable({
  providedIn: 'root'
})
export class MasyarakatService { 


  constructor(private http: HttpClient) { }

  loginMasyarakat(username: loginMasyarakat){
    // const body={nama:username};
    return this.http.post(`${environment.baseUrl}/Users`, username, {observe:'body'});
  }

  tampilanMasyarakat(alamat: tampilanMasyarakat){
    return this.http.post(`${environment.baseUrl}/keluhan/`, alamat, {observe:'body'});
  }

  

  // saveProdusen(produsen : saveProdusen){
  //   return this.http.post(`${environment.baseUrl}/produsen/save`,
  //   produsen, {observe : "response"})
  // }

  // loginMasyarakat(masyarakat :loginMasyarakat){
  //   return this.http.post(`${environment.baseUrl}/Users`,
  //   masyarakat, {observe : "response"})
  }
