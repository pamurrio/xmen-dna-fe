import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/';
@Injectable({
  providedIn: 'root'
})
export class DnaXmenService {

  constructor(private http: HttpClient)  { }

  postIsMutant(data: any){
    return this.http.post(`${baseUrl}mutant/`, data);
  }
}
