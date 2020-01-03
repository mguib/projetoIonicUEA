import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TopicosService } from '../services/topicos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public alertController: AlertController,
    public topService: TopicosService) {}

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Adicionar Tópico!',
      inputs: [
        {
          name: 'nomeTopico',
          id: 'nome',
          type: 'text',
          placeholder: 'Nome do tópico'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok', data);
            this.topService.addTopico(data.nomeTopico);
          }
        }
      ]
    });

    await alert.present();
  }

  setEstado(event) {
    this.topService.setTopicos();
  }
}
