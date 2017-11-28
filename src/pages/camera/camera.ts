import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ToastController } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

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
  videoUrl: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, private mediaCapture: MediaCapture, private streamingMedia: StreamingMedia, private toastCtrl: ToastController){}

  private optionsPhoto: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  takePicture(){
    this.camera.getPicture(this.optionsPhoto).then((imageData) => {
      this.base64image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
      console.log(err);
    })
    let toast = this.toastCtrl.create({
      message: 'Une photo a été prise',
      duration: 5000,
      showCloseButton: true,
      position: 'top'
    });

    toast.present();
  }

  takeVideo(){
    this.mediaCapture.captureVideo().then(
      (data: MediaFile[]) => {this.videoUrl = data [0].fullPath;},
      (err: CaptureError) => console.error(err));
    let toast = this.toastCtrl.create({
      message: 'Une vidéo a été prise',
      showCloseButton: true,
      position: 'top'
    });

    toast.present();
  }
  
   playVideo(){
    let options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      };

    this.streamingMedia.playVideo(this.videoUrl, options);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

}

