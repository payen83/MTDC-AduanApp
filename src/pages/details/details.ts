import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  aduan: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.aduan = { title: '', masalah: '', id: '', status: ''};
  }

  ionViewDidLoad() {
    // console.log('test');
    this.aduan = this.navParams.get('data');
    console.log(this.aduan);
    // console.log('ionViewDidLoad DetailsPage');
  }

}
