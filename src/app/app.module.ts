import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';


import { AppComponent } from './app.component';
import { LstClientesComponent } from './lst-clientes/lst-clientes.component';
import { ReadClienteComponent } from './read-cliente/read-cliente.component';
import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { UpdClienteComponent } from './upd-cliente/upd-cliente.component';
import { BuscarPipe } from './buscar.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LstClientesComponent,
    ReadClienteComponent,
    AddClienteComponent,
    UpdClienteComponent,
    BuscarPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot([
    {
    path: '',
    redirectTo : '/',
    pathMatch: 'full'
    },
   { path: '', component: LstClientesComponent },
   { path: 'add-cliente', component: AddClienteComponent },
   { path: 'upd-cliente/:ClienteId', component: UpdClienteComponent }
])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
