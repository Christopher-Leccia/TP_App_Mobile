import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
/**
 * Generated class for the TextToSpeechPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html',
})


export class TextToSpeechPage {

	app: AppData;

  	constructor(public navCtrl: NavController, public navParams: NavParams, private tts: TextToSpeech) {
  		this.app = new AppData("");
  	}

  ReadText() {

  	this.tts.speak(this.app.text)
  		.then(() => console.log('Success'))
  		.catch((reason: any) => console.log(reason));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TextToSpeechPage');
  }

}


class AppData {
  
  constructor (public text: string)
  {};

}