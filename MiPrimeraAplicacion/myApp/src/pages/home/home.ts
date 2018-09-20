import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alerta: AlertController) {

  }

  otrapagina(){
    this.navCtrl.push(MasinfoPage);
  }

  alertaBasica(){
    let miAlerta = this.alerta.create({
      title: 'Titulo de la alerta',
      message: 'Mensaje de la alerta',
      buttons: ['Entendido']
    });
    miAlerta.present();
  }

  alertaBasica2(){
    let miAlerta2 = this.alerta.create({
      title: 'Titulo de la alerta',
      message: 'Mensaje de la alerta',
      inputs: [
        {
          name:"Nombre",
          placeholder:"Nombre"
        },
      ],
      buttons: [
        {
          text: "Cancel",
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: "Save",
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    miAlerta2.present();
  }
}
