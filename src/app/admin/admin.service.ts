import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loginAdmin } from './admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http : HttpClient) { }

  loginAdmin(admin : loginAdmin){
    return this.http.post(`${environment.baseUrl}/login/users`,
    admin, {observe : "response"})
  }

}
