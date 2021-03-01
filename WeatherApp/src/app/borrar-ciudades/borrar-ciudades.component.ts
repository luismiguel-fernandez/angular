import { Component, OnInit } from '@angular/core';
import { ListaCiudadesService } from '../lista-ciudades.service';

@Component({
  selector: 'app-borrar-ciudades',
  templateUrl: './borrar-ciudades.component.html',
  styleUrls: ['./borrar-ciudades.component.css']
})
export class BorrarCiudadesComponent implements OnInit {

  constructor(private consultarCiudades:ListaCiudadesService) { }

  ngOnInit(): void {

  }

  getCiudades() {
    return this.consultarCiudades.getCiudades()
  }

  borrarCiudad(id) {
    //propagar la llamada de borrar una ciudad al servicio
    // que tiene el array de ciudades

    this.consultarCiudades.removeCiudad(id)
  }

  clearCiudades(){
    this.consultarCiudades.clearCiudades()
  }

}
