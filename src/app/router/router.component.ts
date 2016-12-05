import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importacion de componentes de la aplicacion
import { AddClienteComponent } from '../add-cliente/add-cliente.component';
import { LstClientesComponent } from '../lst-clientes/lst-clientes.component';
import { UpdClienteComponent } from '../upd-cliente/upd-cliente.component';

const routes: Routes = [
   { path: '', component: LstClientesComponent },
   { path: 'add-cliente', component: AddClienteComponent },
   { path: 'upd-cliente/:ClienteId', component: UpdClienteComponent },
   { path: '**', component: LstClientesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingComponents = [ AddClienteComponent,
                                   LstClientesComponent,
                                   UpdClienteComponent ]


