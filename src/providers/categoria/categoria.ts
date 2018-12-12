import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class CategoriaProvider {
  
  private API_URL = 'http://192.168.101.172:8001/api/'

  constructor(public http: Http) { }

  createCategoria(descricao: string) {
    return new Promise((resolve, reject) => {
      var data = {
        descricao: descricao       
      };

      this.http.post(this.API_URL + 'categoria', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error);
        });
    });
  }

}
