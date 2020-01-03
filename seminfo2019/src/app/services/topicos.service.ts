import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TopicosService {

  topicos: any = [];

  constructor(private storage: Storage) {
    this.getTopicos();
  }

  getTopicos() {
    this.storage.get('topicos').then(data => {
      if (data) {
        this.topicos = data;
      }
      console.log('GetTopicos', this.topicos);
    }).catch(error => {
      console.error(error);
    });
  }

  setTopicos() {
    this.storage.set('topicos', this.topicos);
  }

  addTopico(nome) {
    this.topicos.push({nome, ativado: true});
    this.setTopicos();
  }
}
