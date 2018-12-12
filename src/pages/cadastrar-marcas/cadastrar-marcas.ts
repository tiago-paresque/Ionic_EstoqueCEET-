import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { MarcasProvider } from '../../providers/marcas/marcas';

/**
 * Generated class for the CadastrarMarcasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-marcas',
  templateUrl: 'cadastrar-marcas.html',
})
export class CadastrarMarcasPage {

  model: marcas;

  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController,private MarcasProvider: MarcasProvider, private alert: AlertController) {
   
    this.model = new marcas();
    this.model.nome;
  }

  createMarca() {   

    this.MarcasProvider.createMarca(this.model.nome)
    
    .then((result: any) => {    
      const alert = this.alert.create({
        title: 'Cadastro',
        subTitle: 'Marca cadastrada com sucesso! \n'+'Token: '+result.token,
        buttons: ['OK']
      })
      alert.present();       

        //Salvar o token no Ionic Storage para usar em futuras requisições.
        //Redirecionar o usuario para outra tela usando o navCtrl
        //this.navCtrl.pop();
        //this.navCtrl.setRoot()
      })
      .catch((error: any) => {
        const alert = this.alert.create({
          title: 'Erro',
          subTitle: 'Não foi possível cadastrar!'+'\n'+'Erro: '+error.error,
          buttons: ['OK']
        });
        alert.present();          
  
      })
      
  }

}

export class marcas{
  nome: string;
  }
  