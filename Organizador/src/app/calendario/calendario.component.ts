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
      },
      (error) => {
        console.error(error)
      }
    )
    this.basedatos.getProfesores().subscribe(
      (response) => {
        this.profesores = response
      },
      (error) => {
        console.error(error)
      }
    )
    this.basedatos.getExamenes().subscribe(
      (response) => {
        this.examenes = response
        //adaptar ese array examenes (donde ponga un ID = 1 tendrá que poner un nombre)
        this.examenes.forEach(examen => {
          examen.id_mod = this.getProfByID(examen.id_mod)
        });
      },
      (error) => {
        console.error(error)
      }
    )
  }

  private getProfByID(id:number) {
    let elElegido = this.profesores.filter( prof => prof.id == id)
    return elElegido[0].nombre
  }

  private getModByID(id:number) {
    return 
  }
}
