import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the QrScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-scanner',
  templateUrl: 'qr-scanner.html',
})
export class QrScannerPage {

	QRData = null;
	CodeCree = null;
	CodeScanne = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  CreattionCode() {
  	this.CodeCree=this.QRData;
  }

  ScannageCode() {
  	this.barcodeScanner.scan().then(barcodeData => {
  		this.CodeScanne = barcodeData.text;
  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrScannerPage');
  }

}
