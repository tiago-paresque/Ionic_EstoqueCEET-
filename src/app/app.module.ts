import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProdutosPage } from '../pages/produtos/produtos';
import { CadastrarCategoriasPage } from '../pages/cadastrar-categorias/cadastrar-categorias';
import { CadastrarMarcasPage } from '../pages/cadastrar-marcas/cadastrar-marcas';
import { CadastrarProdutosPage } from '../pages/cadastrar-produtos/cadastrar-produtos';
import { ListarCategoriasPage } from '../pages/listar-categorias/listar-categorias';
import { ListarMarcasPage } from '../pages/listar-marcas/listar-marcas';
import { ListarProdutosPage } from '../pages/listar-produtos/listar-produtos';
import { HttpModule } from '@angular/http';
import { CategoriaProvider } from '../providers/categoria/categoria';
import { MarcasProvider } from '../providers/marcas/marcas';
import { ProdutoProvider } from '../providers/produto/produto';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdutosPage,   
    PrincipalPage,
    CadastrarCategoriasPage,
    CadastrarMarcasPage,
    CadastrarProdutosPage,
    ListarCategoriasPage,
    ListarMarcasPage,
    ListarProdutosPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    
    ProdutosPage,   
    CadastrarCategoriasPage,
    CadastrarMarcasPage,
    CadastrarProdutosPage,
    ListarCategoriasPage,
    ListarMarcasPage,
    ListarProdutosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},    
    CategoriaProvider,
    MarcasProvider,
    ProdutoProvider
  ]
})
export class AppModule {
 
}

