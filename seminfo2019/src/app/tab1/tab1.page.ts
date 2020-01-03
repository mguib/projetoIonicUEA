import { Component } from '@angular/core';
import { RecuperaAPIService } from '../services/recupera-api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: any;

  constructor(
    private api: RecuperaAPIService) {
      api.getUsers().then((data: any) => {
        this.users = data.data;
      });
    }

}
