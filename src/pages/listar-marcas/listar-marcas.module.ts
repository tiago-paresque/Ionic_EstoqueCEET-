import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarMarcasPage } from './listar-marcas';

@NgModule({
  declarations: [
    ListarMarcasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarMarcasPage),
  ],
})
export class ListarMarcasPageModule {}
