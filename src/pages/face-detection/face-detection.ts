import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FaceApiProvider} from '../../providers/face-api/face-api';
import {DataLoaderProvider} from '../../providers/data-loader/data-loader'
/**
 * Generated class for the FaceDetectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-face-detection',
  templateUrl: 'face-detection.html',
})
export class FaceDetectionPage {
  correctEmotion: {};
  hasGlasses:boolean;
  gender:string;
  ageEstimation: number;

  faces:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
      private faceapi:FaceApiProvider, private dataLoader:DataLoaderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaceDetectionPage');
    this.dataLoader.load()
      .then((result) => {
        this.faces = result;
      })
  }

  gatherFaceAttributes(imgUrl:string){
    this.faceapi.checkFaceAPI(imgUrl)
      .then((result ) => {
        console.log(result);
        
        this.correctEmotion = result['correctEmotion'];
        this.gender = result['gender'];
        this.hasGlasses = result['hasGlasses'];
        this.ageEstimation = result['age'];
       
  });
}

}
