import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelpdeskProvider } from '../../providers/helpdesk/helpdesk';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: {username: string, password: string};
  constructor(public helpdesk: HelpdeskProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.user = {username: null, password: null};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    this.helpdesk.doLogin(this.user).then(response => {
      let res: any = response;
      if (res.userData) {
        //go to TabsPage
        this.navCtrl.setRoot(TabsPage);
      } else {
        alert('Invalid username or password');
      }
    }, err => {
      console.log(err);
    })
  }

}
