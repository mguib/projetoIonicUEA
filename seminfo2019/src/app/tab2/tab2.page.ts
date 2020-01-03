import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AnotacoesService } from '../services/anotacoes.service';
import { TopicosService } from '../services/topicos.service';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  newTitulo; newNota;



  constructor(
    public alertController: AlertController,
    public noteService: AnotacoesService,
    public topService: TopicosService,
    public cam: Camera, 
    public socialSharing: SocialSharing) {}

  addNota() {
    console.log('Enviar', this.newTitulo, this.newNota,
    this.topService.topicos.filter((item, index, arr) => item.ativado).map(({nome}) => nome));
    this.noteService.addAnotacao(this.newTitulo, this.newNota,
      this.topService.topicos.filter((item, index, arr) => item.ativado).map(({nome}) => nome));
  }
 
  excluir(index: number){
    this.noteService.excluirNota(index);
  }

  sendShare(message, subject, url) {
    this.socialSharing.share(message, subject, null, url);
    // console.log(message,subject,url);

  }

  capturar() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.cam.DestinationType.DATA_URL,
      mediaType: this.cam.MediaType.PICTURE,
      correctOrientation: true
    };
    this.cam.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.noteService.addFotoAnotacao(this.newTitulo, base64Image,
        this.topService.topicos.filter((item, index, arr) => item.ativado).map(({nome}) => nome));
    }, (err) => {
    // Handle error
    });
  }

}
