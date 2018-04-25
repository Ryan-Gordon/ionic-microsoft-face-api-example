import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataLoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataLoaderProvider {

  constructor(public http: Http) {
    console.log('Hello DataLoaderProvider Provider');
  }

  //function we use to pull in data if we do not have it
  load():Promise<any[]>{
   
    return new Promise(resolve => {
         //this is just a standard http request in Angular2. Returns a Promise which we will subscribe too
        this.http.get('assets/data/faces.json')
          .subscribe(result => {
            let originalQ= result.json();
            resolve(this.randomizeImages(originalQ.faces)); //resolve the data we have received making it available throughout the page
        }, (error) => {
            console.error(error);
        });
})

}//load()

 //Basically a sort. We take the raw questions and perform a swap on the order using a tmp variable
 randomizeImages(arrayElements: any[]): any[] {
  for (let i = arrayElements.length - 1; i > 0; i--) {
      
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arrayElements[i];
      arrayElements[i] = arrayElements[j];
      arrayElements[j] = temp;
  }
  return arrayElements;
}

}
