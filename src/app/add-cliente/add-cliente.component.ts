import { Component, OnInit } from '@angular/core';
import { ClienteModelo } from '../modelo/cliente';
import { ClientesService } from '../servicios/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
  formCliente: FormGroup;

  constructor(private _clienteService: ClientesService,
              private _route: ActivatedRoute,
              private _router: Router,
              private fb: FormBuilder) {

                this.formCliente = fb.group ({
                  ClienteId:['', Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]+')
                  ])],
                  Apellido: ['', Validators.compose([
                    Validators.required,
                    Validators.maxLength(10),
                    Validators.minLength(3)
                  ])],
                  Nombre: ['', Validators.compose([
                    Validators.required,
                    Validators.maxLength(10),
                    Validators.minLength(3)
                  ])],
                  Edad: ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]+')
                  ])]
                });
               }

    onSubmit() {
      
      this._clienteService.addCliente(this.formCliente.value)
     .subscribe(
       x => console.log('onNext: ' + x),
       e => console.log('onError: ' + e.message),
       () => {
         console.log('Cliente agregado en el componente...');
         this._router.navigate(['/']);
       }
     );
   }

  ngOnInit() {
    // this.cliente = new ClienteModelo(null, '', '', null);
  }

}
