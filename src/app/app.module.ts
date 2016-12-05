import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LstClientesComponent } from './lst-clientes/lst-clientes.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { UpdClienteComponent } from './upd-cliente/upd-cliente.component';
import { BuscarPipe } from './buscar.pipe';
import { AppRoutingModule, routingComponents } from './router/router.component';
import { DelClienteComponent } from './del-cliente/del-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    LstClientesComponent,
    AddClienteComponent,
    UpdClienteComponent,
    BuscarPipe,
    routingComponents,
    DelClienteComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
