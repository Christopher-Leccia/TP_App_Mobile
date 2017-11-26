import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/Camera';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})

export class CameraPage {

  public base64image: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera){}

  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  TakePicture(){
    this.camera.getPicture(this.options).then((imageData) => {
      this.base64image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}

