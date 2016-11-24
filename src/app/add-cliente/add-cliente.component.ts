import { Component, OnInit } from '@angular/core';
import { ClienteModelo } from '../modelo/cliente';
import { ClientesService } from '../servicios/clientes.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.component.html',
  styleUrls: ['./add-cliente.component.css'],
  providers: [ClientesService]
})
export class AddClienteComponent implements OnInit {
  public cliente: ClienteModelo;
  public status: string;
  public errorMessage: string;

  constructor(private _clienteService: ClientesService, private _route: ActivatedRoute, private _router: Router) { }

  onSubmit() {
    this._clienteService.addCliente(this.cliente)
    .subscribe();
      console.log('Cliente agregado en el componente...');
      this._router.navigate(['/']);
  }

  ngOnInit() {
    this.cliente = new ClienteModelo(0, '', '', 0);
    
  }

}
