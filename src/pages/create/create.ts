import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  aduan: {title: string, masalah: string, kategori: string};
  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.aduan = {title: null, masalah: null, kategori: null};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePage');
  }

  close(){
    this.viewCtrl.dismiss(null);
  }

  save(){
    if(this.aduan.title && this.aduan.masalah && this.aduan.kategori){
      this.viewCtrl.dismiss(this.aduan);
    } else {
      alert('Sila masukkan semua butiran');
    }
    
  }

}
