import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ClienteModelo } from '../modelo/cliente';


@Injectable()
export class ClientesService {
  baseUrl: string = 'http://localhost/webapimvc/api/Clientes';

 constructor( private _Http: Http) { }

  getClientes() {
     console.log('Clientes Leidos en el Servicio...');
    return this._Http.get(this.baseUrl)
                 .map(res =>  res.json());
  }

  getCliente(ClienteId: number) {
      return this._Http.get(this.baseUrl + ClienteId)
                 .map(res => {
                          // Muestra Error si la operacion falla
                          alert(res.status);
                          if (res.status < 200 || res.status >= 300) {
                            throw new Error('La operación ha fallado - Código Status: ' + res.status);
                          }
                          // Devuelve la respuesta si salio todo bien
                          else { return res.json(); }
                  });
  }

  addCliente(cliente: ClienteModelo ) {
     console.log('Cliente agregado en el Servicio...');
    let DatosJson = JSON.stringify(cliente);
    let headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    return this._Http.post(this.baseUrl, DatosJson, {headers: headers})
                          .map(res => res.json());
 }

  delCliente(ClienteId: number) {
      return this._Http.delete(this.baseUrl + '/' + ClienteId)
                  .map(res => {
                          // Muestra Error si la operacion falla
                          if (res.status < 200 || res.status >= 300) {
                            throw new Error('La operación ha fallado - Código Status: ' + res.status);
                          }
                          // Devuelve la respuesta si salio todo bien
                          else { return res.json(); }
                  });
  }

}
