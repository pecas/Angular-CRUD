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

  constructor(private _ClientesService: ClientesService) { }

  getClientes() {
    this._ClientesService.getClientes()
      .subscribe(
      result => { this.clientes = result.data;
                  this.loading = 'hide';
                  
               }
      );

      console.log('Listado Cargadoooo...');
      console.log(this.clientes);
  }

  onEliminarCliente(ClienteId: number) {
    this._ClientesService.delCliente(ClienteId).subscribe(
    (data) => {
      this.getClientes();
      return true;
      }
      );
  }

  ngOnInit() {
    this.loading = 'show';
    this.getClientes();
    
  }
}
