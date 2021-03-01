import { Component, OnInit } from '@angular/core';
import { ConsultarTiempoService } from '../consultar-tiempo.service';
import { ListaCiudadesService } from '../lista-ciudades.service';
import { MisCiudadesComponent } from '../mis-ciudades/mis-ciudades.component';

@Component({
  selector: 'app-anyadir-ciudad',
  templateUrl: './anyadir-ciudad.component.html',
  styleUrls: ['./anyadir-ciudad.component.css']
})
export class AnyadirCiudadComponent implements OnInit {

  resultados = []

  //Propiedades booleanas para mostrar o no mostrar mensajes al intentar añadir ciudades
  msgAddCityOK = false
  msgAddCityError = false

  constructor(private consultarTiempo:ConsultarTiempoService,
              private listaCiudades:ListaCiudadesService) { }

  ngOnInit(): void {
  }

  buscarCiudades(patron:string){
    this.consultarTiempo.getCiudadesPorPatron(patron).subscribe(
      (response) => {
        console.log('Response received');
        this.resultados = []
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

  addCiudad(id: number) {
    //añadir la nueva ciudad al array de ciudades que está
    // en el componente MisCiudades (comprobar si ya está en el array)
    if (this.listaCiudades.getCiudades().includes(id)) {
      this.msgAddCityOK = false
      this.msgAddCityError = true
    } else {
      this.listaCiudades.addCiudad(id)
      this.msgAddCityError = false
      this.msgAddCityOK = true
    }
  }

}
