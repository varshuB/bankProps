import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addProperty(data:any){
    return this.http.post(`${environment.apiUrl}/v1/user/AddProperty`, data)
  }
}
