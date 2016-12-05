import { Component, OnInit, Input } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-del-cliente',
  templateUrl: './del-cliente.component.html',
  styleUrls: ['./del-cliente.component.css']
})
export class DelClienteComponent implements OnInit {
  @Input('datos') datos: any;
 
  constructor(private _ClientesService: ClientesService, private _router: Router) { }

  ngOnInit() {
  }

onEliminarCliente(ClienteId: number) {
    this._ClientesService.delCliente(ClienteId).subscribe(
    (data) => {
      //  this.getClientes();
       jQuery('#gridSystemModal').modal('hide');
       // this._router.navigate(['/']);
        return true;
        }
      );
  }
}
