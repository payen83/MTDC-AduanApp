import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HelpdeskProvider } from '../../providers/helpdesk/helpdesk';
import { DetailsPage } from '../details/details';
import { CreatePage } from '../create/create';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  aduanList: Array<any>;
  constructor(
    public navCtrl: NavController, 
    public helpdesk: HelpdeskProvider,
    public modalCtrl: ModalController) {
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

  createPage(){
    const modal = this.modalCtrl.create(CreatePage);
    modal.onDidDismiss(response=>{
      if(response){
        this.helpdesk.createAduan(response).then(result=>{
          let res: any = result;
          if(res.feedData){
            alert('Aduan baru diterima');
            this.ionViewDidLoad();
          }
        }).catch(error=>{
          console.log('Error: ', JSON.stringify(error));
        })
      } else {
        return;
      }
    })
    modal.present();
  }



}
