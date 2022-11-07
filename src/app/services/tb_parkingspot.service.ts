import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class tb_parkingspotService {
  private apiUrl = "http://localhost:8080/parking-spot";
  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<any>(this.apiUrl)
  }

  save(tb_parkingspot: object){
    console.log(tb_parkingspot)
    return this.http.post<Object>(this.apiUrl, tb_parkingspot);
  }

  getbyid(id: string){
    console.log(this.http.get<any>(`${this.apiUrl}/${id}`))
    return this.http.get(`${this.apiUrl}/${id}`);
    
  }

  deletebyid(id: string){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  editbyid(id: string, tb_parkingspot: object){
    return this.http.put(`${this.apiUrl}/${id}`, tb_parkingspot);
  }
  
}
