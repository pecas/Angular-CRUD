import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(clientes: any, term?: any): any {

    // Controlo que el valor del parametro no este vacio, en caso que lo este se devuelve el mismo valor.
    if (term === undefined){
      return clientes;
    }
    // Se devuelve todos los clientes filtrados utilizando el valor contenido en el parametro term.
    // En este caso se pasan los dos valores a minusculas para realizar la comparacopn correctamente.
    return clientes.filter(function(cliente){
      return cliente.Apellido.toLowerCase().startsWith(term.toLowerCase());
    });
  }
}
