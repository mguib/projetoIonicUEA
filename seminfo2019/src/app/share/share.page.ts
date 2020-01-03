import { Component, OnInit } from '@angular/core';
import {SocialSharing} from '@ionic-native/social-sharing';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor(public socialSharing = SocialSharing) { }

  ngOnInit() {
  }

  sShare(){
    var options = {
      message: 'Ionic Share', // not supported on some apps (Facebook, Instagram)
      url: 'https://ionicframework.com/docs/native/social-sharing',
    };
    this.socialSharing.shareWithOptions(options);
  }
}
