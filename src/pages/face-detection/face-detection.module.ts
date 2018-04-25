import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaceDetectionPage } from './face-detection';

@NgModule({
  declarations: [
    FaceDetectionPage,
  ],
  imports: [
    IonicPageModule.forChild(FaceDetectionPage),
  ],
})
export class FaceDetectionPageModule {}
