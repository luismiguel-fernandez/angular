import { Component, OnInit } from '@angular/core';
import { ConsultarTiempoService } from '../consultar-tiempo.service';
import { ListaCiudadesService } from '../lista-ciudades.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-anyadir-ciudad',
  templateUrl: './anyadir-ciudad.component.html',
  styleUrls: ['./anyadir-ciudad.component.css']
})
export class AnyadirCiudadComponent implements OnInit {

  resultados = []

  msgAddCityOK = false
  msgAddCityError = false

  constructor(private consultarTiempo:ConsultarTiempoService,
              private listaCiudades:ListaCiudadesService) { }

  ngOnInit(): void {
  }

  buscarCiudades(patron:string){
    this.resultados = []
    this.consultarTiempo.getCiudadesPorPatron(patron).subscribe(
      (response) => {
        console.log('Response received');
        console.table(response)
        response['list'].forEach(element => {
          let nuevoResultado = {
            id: element.id,
            name: element.name,
            country: element['sys'].country
          }
          this.resultados.push(nuevoResultado)
        });
      },
      (error) => {
        console.error('Request failed with error');
        console.error(error);
      }
    )
  }

  addCiudad(nuevaCiudad:any) {
    //añadir ciudad si no existe previamente
    this.msgAddCityError = false
    this.msgAddCityOK = false
    if ( !this.listaCiudades.incluye(nuevaCiudad) ) {
      this.listaCiudades.addCiudad(nuevaCiudad)
      this.msgAddCityOK = true
      setTimeout( () => this.msgAddCityOK = false, 3000)
    } else {
      this.msgAddCityError = true
    }
  }

}
