import { Component } from '@angular/core';
import { AccesoDatosService } from './acceso-datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 0
  piezas

   constructor(private accesoDatos: AccesoDatosService) {
     accesoDatos.getDatos().subscribe(
      (data: any[])=>{
        this.piezas = data;
      }
    )

  } //FIN DEL CONSTRUCTOR

  removeItem(item: string) {
    // va a intentar eliminar un elemento del array piezas
    //console.log("Componente padre: el parámetro es " + item)
    //eliminar el elemento correcto a partir del nombre recibido como parámetro
    //console.table(this.piezas)
    this.piezas = this.piezas.filter(pieza => pieza != item)
  }
} // FIN DE LA CLASE 
