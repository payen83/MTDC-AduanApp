import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpdeskProvider } from '../../providers/helpdesk/helpdesk';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aduanList: Array<any>;
  constructor(public navCtrl: NavController, public helpdesk: HelpdeskProvider) {
    this.aduanList = [];
  }

  ionViewDidLoad(){
    this.getAduanList();
  }

  getAduanList() {
    this.helpdesk.getAduanAll().then(result => {
      let response: any = result;
      this.aduanList = response.feedData;
      console.log(result);
    }).catch(error => {
      console.log('error', error);
    })
  }

  setTime(time){
    let milliseconds: number = time * 1000;
    let date = new Date(milliseconds);
    return date.toLocaleDateString();
  }

  detailsPage(aduan) {
    console.log(aduan);
    //this.navCtrl.setRoot('DetailsPage');
    //this.navCtrl.push('DetailsPage');
    this.navCtrl.push(DetailsPage, {data: aduan});
  }



}
