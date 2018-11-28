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

}
