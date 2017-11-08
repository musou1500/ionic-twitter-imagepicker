import { Component } from '@angular/core';

/**
 * Generated class for the ImgSlideComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'img-slide',
  templateUrl: 'img-slide.html'
})
export class ImgSlideComponent {

  text: string;

  constructor() {
    console.log('Hello ImgSlideComponent Component');
    this.text = 'Hello World';
  }

}
