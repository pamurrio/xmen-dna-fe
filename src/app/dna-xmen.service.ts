import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'https://xmen-dna-be.herokuapp.com/';
@Injectable({
  providedIn: 'root'
})
export class DnaXmenService {

  constructor(private http: HttpClient)  { }

  postIsMutant(data: any){
    return this.http.post(`${baseUrl}mutant/`, data);
  }
}
