import { Injectable } from '@angular/core';
import { Http } from '@angular/http';



@Injectable()
export class MarcasProvider {

  private API_URL = 'http://192.168.101.172:8001/api/'

  constructor(public http: Http) { }

  createMarca(nome: string) {
    return new Promise((resolve, reject) => {
      var data = {
        nome: nome       
      };

      this.http.post(this.API_URL + 'marcas', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error);
        });
    });
  }

 getMarcas(){
return new Promise(resolve =>{
  this.http.get(this.API_URL+'marcas').subscribe(data=>{
    resolve(data);
  }, err =>{
    console.log(err);
      });
   });
}


}


