import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';


@IonicPage()
@Component({
  selector: 'page-cadastrar-categorias',
  templateUrl: 'cadastrar-categorias.html',
})
export class CadastrarCategoriasPage {
 model: Categorias;
 
 
 constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController,private categoriaProvider: CategoriaProvider, private alert: AlertController) {
  
  this.model = new Categorias();
  this.model.descricao;
  }
  createCategoria() {   

    this.categoriaProvider.createCategoria(this.model.descricao)
    
    .then((result: any) => {    
      const alert = this.alert.create({
        title: 'Cadastro',
        subTitle: 'Categoria cadastrada com sucesso! \n'+'Token: '+result.token,
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


export class Categorias{
descricao: string;
}
