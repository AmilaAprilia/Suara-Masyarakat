import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loginAdmin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }
  login(email : string, password : string){
    let data = new FormData()
    data.append('email', email)
    data.append('password', password)
    return this.http.post(`${environment.baseUrl}/login/Users`, data, {observe : 'response'})
  }

}
