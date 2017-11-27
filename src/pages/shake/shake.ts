import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';

/**
 * Generated class for the ShakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shake',
  templateUrl: 'shake.html',
})
export class ShakePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private shake: Shake) {
  	this.shake.startWatch(40).subscribe(data => {
  		alert('Shake Shake');
  		console.log('shake');
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShakePage');
  }

}
