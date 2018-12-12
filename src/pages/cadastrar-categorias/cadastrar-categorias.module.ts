import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarCategoriasPage } from './cadastrar-categorias';

@NgModule({
  declarations: [
    CadastrarCategoriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarCategoriasPage),
  ],
})
export class CadastrarCategoriasPageModule {}
