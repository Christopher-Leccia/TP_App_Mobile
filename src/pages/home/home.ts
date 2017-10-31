import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  app: AppData;
  clickMessage = '';
  
    onClickMe() {
      this.clickMessage = 'You have been baited';
    }

  constructor(public navCtrl: NavController) {
    this.app = new AppData ('Username', 5.6);
  
       

  }

}

class AppData {
  
  constructor (public nom: String,public version: Number)
  {};

}

