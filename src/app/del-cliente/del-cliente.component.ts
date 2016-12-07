import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ClientesService } from '../servicios/clientes.service';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-del-cliente',
  templateUrl: './del-cliente.component.html',
  styleUrls: ['./del-cliente.component.css']
})
export class DelClienteComponent implements OnInit {
  @Input('datos') datos: any;
  @Output() clienteEliminado = new EventEmitter();
 
  constructor(private _ClientesService: ClientesService, private _router: Router) { }

  ngOnInit() {
  }

onEliminarCliente(ClienteId: number) {
    this._ClientesService.delCliente(ClienteId).subscribe(
        x => console.log('onNext: ' + x),
        e => console.log('onError: ' + e.message),
       () => {
          console.log('Cliente Eliminado...');
          jQuery('#gridSystemModal').modal('hide');
          this.clienteEliminado.emit({eliminado: true});
       }
      );
  }
}


