import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavController, Slides, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
  @ViewChild(Slides) slides: Slides;
  imgSize = 100;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  ngAfterViewInit() {
    this.slides.freeMode = true;
    this.slides.freeModeSticky = true;
    this.slides.width = this.imgSize;
    this.slides.spaceBetween = 10;
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'ﾊﾊｯ',
      subTitle: 'ちんちーんｗｗｗ'
    });
    alert.present();
  }

}
