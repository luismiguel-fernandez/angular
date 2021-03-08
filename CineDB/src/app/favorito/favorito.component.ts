import { Component, Input, OnInit } from '@angular/core';
import { FavoritosService } from '../favoritos.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  @Input() parametro

  constructor(private favoritos:FavoritosService) { }

  ngOnInit(): void {
  }

  borrarFavorito(id: string) {
    //console.log(id)
    this.favoritos.removeFavorito(id)
  }
}
