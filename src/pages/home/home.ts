import { Component } from '@angular/core';
import { NavController, AlertController, ToastController} from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toast: ToastController, private alert: AlertController) {     

  }
  showAlert() {
    const alert = this.alert.create({
      title: 'Erro',
      subTitle: 'E-mail incorreto!',
      buttons: ['OK']
    });
    alert.present();
  }
  showAlert2() {
    const alert = this.alert.create({
      title: 'Erro',
      subTitle: 'Senha incorreta!',
      buttons: ['OK']
    });
    alert.present();
  }
   
  logar(nome:any, senha:any){ 
   
   if (nome == "adm@ceet.com"){

    if(senha =="123456"){
      this.navCtrl.setRoot(PrincipalPage);
    }else{
      this.showAlert2();
    }
         
   }
   else{
    
   this.showAlert();
   }
   
}

}
