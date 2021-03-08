import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-listado-favoritos',
  templateUrl: './listado-favoritos.component.html',
  styleUrls: ['./listado-favoritos.component.css']
})
export class ListadoFavoritosComponent implements OnInit {

  constructor(private favoritos:FavoritosService) { }

  ngOnInit(): void { }

  getFavoritos() {
    return this.favoritos.getFavoritos()
  }

}
