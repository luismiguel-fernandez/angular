import { Component, OnInit } from '@angular/core';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  examenes
  profesores
  modulos

  constructor(private basedatos:AccesoDatosService) { }

  ngOnInit(): void {
    this.basedatos.getModulos().subscribe(
      (response) => {
        this.modulos = response
        //ahora lanzo la siguiente paloma mensajera
            this.basedatos.getProfesores().subscribe(
              (response) => {
                this.profesores = response
                //ahora lanzo la 3ª paloma mensajera
                this.basedatos.getExamenes().subscribe(
                  (response) => {
                    let arraytemporal
                    arraytemporal = response
                    //adaptar ese array examenes (donde ponga un ID = 1 tendrá que poner un nombre)
                    arraytemporal.forEach(examen => {
                      examen.id_mod = this.getModByID(examen.id_mod)
                      examen.id_prof = this.getProfByID(examen.id_prof)
                    });
                    this.examenes = arraytemporal
                  },
                  (error) => {
                    console.error(error)
                  }
                )
              },
              (error) => {
                console.error(error)
              }
            )
      },
      (error) => {
        console.error(error)
      }
    )

      //aplicar el plugin DATATABLES
      //$('#tablaexamenes').DataTable();
  }

  private getProfByID(id:number) {
    let elElegido = this.profesores.filter( prof => prof.id == id)
    return elElegido[0].nombre
  }

  private getModByID(id:number) {

    let elElegido = this.modulos.filter( mod => mod.id == id)
    return elElegido[0].nombre
  }
}
