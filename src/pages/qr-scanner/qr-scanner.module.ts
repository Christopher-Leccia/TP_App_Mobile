import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrScannerPage } from './qr-scanner';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    QrScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(QrScannerPage),
    NgxQRCodeModule,
  ],
})
export class QrScannerPageModule {}
