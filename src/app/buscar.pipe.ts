import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(clientes: any, term?: any): any {
    if (term === undefined){
      return clientes;
    }
    return clientes.filter(function(cliente){
      return cliente.Apellido.toLowerCase().startsWith(term.toLowerCase());
    });
  }
}
