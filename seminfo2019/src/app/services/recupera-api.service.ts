import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecuperaAPIService {

  constructor(
    private http: HttpClient,
    private platform: Platform) {
    this.getUsers().then(data => {
      console.log(data);
    }).catch(error => {
      console.error(error);
    });
   }

  getUsers() {
    return this.http.get('https://reqres.in/api/users').toPromise();
  }
}
