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
  public clientes: ClienteModelo;
  public loading;
  public clienteseleccionado: Object = {};

  constructor(private _ClientesService: ClientesService) { }

  getClientes() {
    this._ClientesService.getClientes()
      .subscribe(
      data => { this.clientes = data;
                this.loading = 'hide';
               }
      );
  }

  // onEliminarCliente(ClienteId: number) {
  //   this._ClientesService.delCliente(ClienteId).subscribe(
  //   (data) => {
  //       this.getClientes();
  //       return true;
  //       }
  //     );
  // }

  ngOnInit() {
    this.loading = 'show';
    this.getClientes();
  }
}
