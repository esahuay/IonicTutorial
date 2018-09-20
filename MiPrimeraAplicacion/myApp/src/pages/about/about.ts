import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  lista : Array<any> = [
    {
      titulo: "perro",
      color: "#444"
    },
    {
      titulo: "gato",
      color: "#999"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
