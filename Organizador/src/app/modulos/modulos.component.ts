import { Component, OnInit } from '@angular/core';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.css']
})
export class ModulosComponent implements OnInit {

  modulos

  constructor(private basedatos:AccesoDatosService) { }

  ngOnInit(): void {
    this.basedatos.getModulos().subscribe(
      (response) => {
        this.modulos = response
      },
      (error) => {
        console.error("error")
      }
    )
  }

}
