import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ClienteModelo } from '../modelo/cliente';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ClientesService {
  baseUrl: string = 'http://localhost/webapimvc/api/Clientes';

 constructor( private _Http: Http) { }

  // getClientes() {
  //    console.log('Clientes Leidos en el Servicio...');
  //   return this._Http.get(this.baseUrl)
  //                .map(res =>  res.json());
  // }

  getClientes(): Observable<ClienteModelo[]>{
    return this._Http.get(this.baseUrl)
    .map((response: Response) => <ClienteModelo[]>response.json())
    .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  getCliente(ClienteId: number) {
      return this._Http.get(this.baseUrl + '/' + ClienteId)
                 .map(res => res.json());
  }

  addCliente(cliente: ClienteModelo ) {
     console.log('Cliente agregado en el Servicio...');
    let DatosJson = JSON.stringify(cliente);
    let headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    return this._Http.post(this.baseUrl, DatosJson, {headers: headers})
                          .map(res => res.json());
 }

  delCliente(ClienteId: number): Observable<ClienteModelo[]> {
      return this._Http.delete(this.baseUrl + '/' + ClienteId)
                  .map(res =>  res.json());
  }

  updCliente(ClienteId: number, cliente: ClienteModelo){
    let DatosJson = JSON.stringify(cliente);
    let headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
    return this._Http.put(this.baseUrl + '/' + ClienteId, DatosJson, {headers: headers});
  }

}
