import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HelpdeskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpdeskProvider {
  baseURL: string;
  constructor(public http: HttpClient) {
    this.baseURL = 'http://localhost/helpdesk/api';
  }

  getAduanAll(){
    let url: string = this.baseURL + '/getAduanAll';

    return new Promise( (resolve, reject) => {
      this.http.get(url)
      .subscribe(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
    })
  }

  createAduan(aduan: any){
    let data = {
      user_id: 1,
      token: 'd5f66a06ec809d70d0c52842df8dc0011d7d1ad0f2d56f50d3123da17a2489fe',
      title: aduan.title,
      kategori: aduan.kategori,
      masalah: aduan.masalah    
    };

    let url = this.baseURL + '/createAduan';
    let body = JSON.stringify(data);

    return new Promise( (resolve, reject) => {
      this.http.post(url, body)
      .subscribe(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
    })
  }

  doLogin(user: any){
    let url = this.baseURL + '/login';
    let body = JSON.stringify(user);

    return new Promise( (resolve, reject) => {
      this.http.post(url, body)
      .subscribe(response => {
        resolve(response);
      }, err => {
        reject(err);
      })
    })
  }

}
