import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the HelpdeskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpdeskProvider {
  baseURL: string;
  constructor(public http: HttpClient, public storage: Storage) {
    this.baseURL = 'http://helpdesk.appsmalaya.com/api';
  }

  getAduanAll() {
    let url: string = this.baseURL + '/getAduanAll';

    return new Promise((resolve, reject) => {
      this.http.get(url)
        .subscribe(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
    })
  }

  createAduan(aduan: any) {
    return new Promise((resolve, reject) => {
      this.storage.get('USERDATA').then(result => {
        if (result) {
          let user = JSON.parse(result);

          let data = {
            user_id: user.user_id,
            token: user.token,
            title: aduan.title,
            kategori: aduan.kategori,
            masalah: aduan.masalah
          };

          let url = this.baseURL + '/createAduan';
          let body = JSON.stringify(data);

          this.http.post(url, body)
            .subscribe(response => {
              resolve(response);
            }, err => {
              reject(err);
            })
        }
      })
    })
  }

  doLogin(user: any) {
    let url = this.baseURL + '/login';
    let body = JSON.stringify(user);

    return new Promise((resolve, reject) => {
      this.http.post(url, body)
        .subscribe(response => {
          resolve(response);
        }, err => {
          reject(err);
        })
    })
  }

}
