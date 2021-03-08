import { Component, OnInit } from '@angular/core';
import { BaseDatosCineService } from '../base-datos-cine.service';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-buscador-consultas',
  templateUrl: './buscador-consultas.component.html',
  styleUrls: ['./buscador-consultas.component.css']
})
export class BuscadorConsultasComponent implements OnInit {

  resultados = []
  hayResultados = false
  msgAddFavOK = false
  msgAddFavError = false

  constructor(private basedatos:BaseDatosCineService,
              private favoritos:FavoritosService) { }

  ngOnInit(): void {
  }

  buscarPeliculas(patron : string) {
    this.hayResultados = false
    if (patron && patron.length) {
      this.basedatos.buscarPorNombre(patron).subscribe(
        (response)=>{
          this.resultados = response['Search']
          //console.log(this.resultados)
          this.hayResultados = true
        },
        (error)=>{
          console.error(error)
        }
      )
    }
  }

  addFavorito(resultado) {
    if (resultado) {
      this.msgAddFavError = false
      this.msgAddFavOK = false

      if ( !this.favoritos.incluye(resultado) ) {
        this.favoritos.addFavorito(resultado)
        this.msgAddFavOK = true
        setTimeout( () => this.msgAddFavOK = false, 3000)
      } else {
        this.msgAddFavError = true
        setTimeout( () => this.msgAddFavError = false, 3000)
      }
    }
  }

}
