import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { Vibration } from '@ionic-native/vibration';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Gyroscope } from '@ionic-native/gyroscope';
import { Shake } from '@ionic-native/shake';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { MediaCapture } from '@ionic-native/media-capture';
import { StreamingMedia } from '@ionic-native/streaming-media';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { GeolocalisationPageModule } from '../pages/geolocalisation/geolocalisation.module';
import { CameraPageModule } from '../pages/camera/camera.module';
import { ToastPageModule } from '../pages/toast/toast.module';
import { VibrationPageModule } from '../pages/vibration/vibration.module';
import { TextToSpeechPageModule } from '../pages/text-to-speech/text-to-speech.module';
import { GyroscopePageModule } from '../pages/gyroscope/gyroscope.module';
import { ShakePageModule } from '../pages/shake/shake.module';
import { QrScannerPageModule } from '../pages/qr-scanner/qr-scanner.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
  ],
  imports: [
    BrowserModule,
    CameraPageModule,
    GeolocalisationPageModule,
    ToastPageModule,
    VibrationPageModule,
    TextToSpeechPageModule,
    GyroscopePageModule,
    ShakePageModule,
    QrScannerPageModule,
    NgxQRCodeModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera, 
    Vibration,
    TextToSpeech,
    Gyroscope,
    Shake,
    BarcodeScanner,
    MediaCapture,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
