import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  presentToast() {
  	let toast = this.toastCtrl.create({
  		message: 'Ceci est un toast qui s\'affiche pour 20secondes',
  		duration: 20000,
  		showCloseButton: true,
  		position: 'top'
  	});

  	toast.onDidDismiss(() => {
  		console.log('Toast enlevé')
  	});

  	toast.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

}
