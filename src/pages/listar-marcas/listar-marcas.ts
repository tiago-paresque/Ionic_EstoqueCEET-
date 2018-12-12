import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ToastController } from 'ionic-angular';
import { MarcasProvider } from '../../providers/marcas/marcas';
import { ViewChild } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-listar-marcas',
  templateUrl: 'listar-marcas.html',
})
export class ListarMarcasPage {
  produto: any;
  
  @ViewChild(InfiniteScroll) infiniteScroll: InfiniteScroll;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private MarcasProvider: MarcasProvider, private toast: ToastController) {
  this.ListMarcas();
  }
ListMarcas(){
  this.MarcasProvider.getMarcas()
.then(data=>{
  this.produto =data;
  console.log(this.produto);
});
  
}
}
