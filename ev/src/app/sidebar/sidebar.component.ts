import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  fabricantes;
  tecnologias;
<<<<<<< HEAD
  @Output() eventoAvisarPadrePatronCambiado = new EventEmitter<string>();
  @Output() eventoAvisarPadreCambioFabricante = new EventEmitter<string>();
  
=======
  @Output() patternChange = new EventEmitter<string>();

>>>>>>> 6612e3c9433d5b36ca14c5a48290562d6c89f9be
  constructor(private accesoDatos: CarsService) { }

  ngOnInit(): void {
    this.accesoDatos.getMakers().subscribe(
      (data) => {
        this.fabricantes = data
      }
    )
    this.accesoDatos.getTechs().subscribe(
      (data) => {
        this.tecnologias = data
      }
    )
  } //ngOnInit
  
  cambiosEnPatron(patron:string) {
    this.eventoAvisarPadrePatronCambiado.emit(patron)
  }

  cambioDeFabricante(idFab:string) {
    this.eventoAvisarPadreCambioFabricante.emit(idFab)
  }

  nuevoPatron(value: string) {
    this.patternChange.emit(value)
  }
  
} //class
