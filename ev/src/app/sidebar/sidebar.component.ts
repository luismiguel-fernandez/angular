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
  @Output() eventoAvisarPadrePatronCambiado = new EventEmitter<string>();
  @Output() eventoAvisarPadreCambioFabricante = new EventEmitter<string>();
  
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

} //class
