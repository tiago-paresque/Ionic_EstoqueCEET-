import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarCategoriasPage } from './listar-categorias';

@NgModule({
  declarations: [
    ListarCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarCategoriasPage),
  ],
})
export class ListarCategoriasPageModule {}
