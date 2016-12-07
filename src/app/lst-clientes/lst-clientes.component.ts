import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { ClienteModelo } from '../modelo/cliente';

@Component({
  selector: 'app-lst-clientes',
  templateUrl: './lst-clientes.component.html',
  styleUrls: ['./lst-clientes.component.css'],
  providers: [ClientesService]
})
export class LstClientesComponent implements OnInit {
  public clientes: ClienteModelo[];
  public loading;
  public clienteseleccionado: Object = {};

  constructor(private _ClientesService: ClientesService) { }

  getClientes() {
    this._ClientesService.getClientes()
      .subscribe(
        x => this.clientes = x,
        e => console.log('onError: ' + e.message),
       () => {
         console.log('Clientes Listados Ok...');
                 this.loading = 'hide';
       }
      );
  }

  EliminacionCliente(event): void{
    if (event.eliminado === true) {
      this.getClientes();
    }
  }

  ngOnInit() {
    this.loading = 'show';
    this.getClientes();
  }
}
