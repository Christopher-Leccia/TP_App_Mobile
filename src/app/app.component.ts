import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CameraPage } from '../pages/camera/camera';
import { GeolocalisationPage } from '../pages/geolocalisation/geolocalisation';
import { ToastPage } from '../pages/toast/toast';
import { VibrationPage } from '../pages/vibration/vibration';
import { TextToSpeechPage } from '../pages/text-to-speech/text-to-speech';
import { GyroscopePage } from '../pages/gyroscope/gyroscope';
import { ShakePage } from '../pages/shake/shake';
import { QrScannerPage } from '../pages/qr-scanner/qr-scanner';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Geolocalisation / Google map', component : GeolocalisationPage},
      { title: 'Camera', component : CameraPage},
      { title: 'Toast', component : ToastPage},
      { title: 'Vibration', component : VibrationPage},
      { title: 'Text To Speech', component : TextToSpeechPage},
      { title: 'Gyroscope', component : GyroscopePage},
      { title: 'Shake', component : ShakePage},  
      { title: 'QRScanner', component: QrScannerPage}    
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
