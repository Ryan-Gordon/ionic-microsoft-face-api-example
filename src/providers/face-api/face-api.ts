import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FaceApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FaceApiProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FaceApiProvider Provider');
  }

}
