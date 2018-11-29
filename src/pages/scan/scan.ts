import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {
  qrcode_text: string;
  constructor(public scanner: BarcodeScanner, public navCtrl: NavController, public navParams: NavParams) {
    this.qrcode_text = 'Your QR Code text will appear here';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scanQRCode(){
    this.scanner.scan().then(barcodeData => {
      //console.log('Barcode data', barcodeData);
      this.qrcode_text = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
