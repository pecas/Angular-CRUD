import { Component, OnInit } from '@angular/core';
import { ClienteModelo } from '../modelo/cliente';
import { ClientesService } from '../servicios/clientes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-upd-cliente',
  templateUrl: './upd-cliente.component.html',
  styleUrls: ['./upd-cliente.component.css'],
  providers: [ClientesService]
})
export class UpdClienteComponent implements OnInit {

  public cliente: ClienteModelo;
  constructor(private _clienteService: ClientesService, private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
       this.cliente = new ClienteModelo(0, '', '', 0);
       this.getCliente();
  }

  onSubmit(){
     this._route.params.forEach((params: Params) => {
        let ClienteId = params['ClienteId'];
        this._clienteService.updCliente(ClienteId, this.cliente)
         .subscribe(
              x => console.log('onNext: ' + x),
              e => console.log('onError: ' + e.message),
              () => {
                console.log('Cliente actualizado en el componente...');
                this._router.navigate(['/']);
              }
            );
      });
  }

    getCliente() {
      this._route.params.forEach((params: Params) => {
        let ClienteId = params['ClienteId'];
        this._clienteService.getCliente(ClienteId)
         .subscribe(
             data => { this.cliente = data;}
          );
      });
    }
}
