import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loginMasyarakat } from './masyarakat.model';

@Injectable({
  providedIn: 'root'
})
export class MasyarakatService {

  constructor(private http: HttpClient) { }

  loginMasyarakat(masyarakat : loginMasyarakat) {
    return this.http.post(`${environment.baseUrl}/users`,
    masyarakat, {observe : "response"})
  }
}
