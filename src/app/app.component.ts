import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Menu, ActionSheetController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { CadastrarProdutosPage } from '../pages/cadastrar-produtos/cadastrar-produtos';
import { ListarProdutosPage } from '../pages/listar-produtos/listar-produtos';
import { CadastrarMarcasPage } from '../pages/cadastrar-marcas/cadastrar-marcas';
import { ListarMarcasPage } from '../pages/listar-marcas/listar-marcas';
import { CadastrarCategoriasPage } from '../pages/cadastrar-categorias/cadastrar-categorias';
import { ListarCategoriasPage } from '../pages/listar-categorias/listar-categorias';


@Component({
  templateUrl: 'app.html',
  
})
export class MyApp {  
  @ViewChild (Nav) Nav: Nav; 
  rootPage:any = HomePage;

  
  

  constructor(public actionSheetCtrl: ActionSheetController,platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  } 
  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Produtos',
      buttons: [
        {
          text: 'Cadastrar',
          role: 'Cadastrar',
          handler: () => {
            this.Nav.setRoot(CadastrarProdutosPage); 
          }
        },{
          text: 'Listar',
          role: 'Listar',
          handler: () => {
            this.Nav.setRoot(ListarProdutosPage); 
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentActionSheet2() {
    const actionSheet2 = this.actionSheetCtrl.create({
      title: 'Marcas',
      buttons: [
        {
          text: 'Cadastrar',
          role: 'Cadastrar',
          handler: () => {
            this.Nav.setRoot(CadastrarMarcasPage); 
          }
        },{
          text: 'Listar',
          role: 'Listar',
          handler: () => {
            this.Nav.setRoot(ListarMarcasPage); 
          }
        }
      ]
    });
    actionSheet2.present();
  }
  presentActionSheet3() {
    const actionSheet3 = this.actionSheetCtrl.create({
      title: 'Categorias',
      buttons: [
        {
          text: 'Cadastrar',
          role: 'Cadastrar',
          handler: () => {
            this.Nav.setRoot(CadastrarCategoriasPage); 
          }
        },{
          text: 'Listar',
          role: 'Listar',
          handler: () => {
            this.Nav.setRoot(ListarCategoriasPage); 
          }
        }
      ]
    });
    actionSheet3.present();
  }
  


  principal(){
    this.Nav.setRoot(PrincipalPage);    
}

deslogar(){
  this.Nav.setRoot(HomePage);    
}

}