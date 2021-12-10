import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'https://randomuser.me/api/'
  constructor(
    private http: HttpClient
  ) {
    console.log('persona veronica')
   }
   getPersonas(){
    let header = new HttpHeaders().set('Type.content','aplication/json')
    return this.http.get(this.url, {headers: header});
   }
}
