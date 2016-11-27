import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { ClienteModelo } from '../modelo/cliente';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lst-clientes',
  templateUrl: './lst-clientes.component.html',
  styleUrls: ['./lst-clientes.component.css'],
  providers: [ClientesService]
})
export class LstClientesComponent implements OnInit {
  public clientes: ClienteModelo;
  public loading;

  constructor(private _ClientesService: ClientesService, private _route: ActivatedRoute, private _router: Router) { }

  getClientes() {
    this._ClientesService.getClientes()
      .subscribe(
      data => { this.clientes = data;
                this.loading = 'hide';
               }
      );
  }

  onEliminarCliente(ClienteId: number) {
    this._ClientesService.delCliente(ClienteId).subscribe(
    (data) => {
      this.getClientes();
      return true;
      }
      );
  }

 onSelect(cli){
   alert('entre');
     this._router.navigate(['/upd-cliente', cli.ClienteId]);
 }

  ngOnInit() {
    this.loading = 'show';
    this.getClientes();
  }
}
