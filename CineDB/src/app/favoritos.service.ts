import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private favoritos = []

  constructor() { 
    this.favoritos.push({
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Title": "Blade Runner",
      "Type": "movie",
      "Year": "1982",
      "imdbID": "tt0083658"
    })
    this.favoritos.push({
      "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
      "Title": "The Matrix",
      "Type": "movie",
      "Year": "1999",
      "imdbID": "tt0133093"
    })
  }

  getFavoritos() {
    return this.favoritos
  }

  addFavorito(nuevoFavorito: any) {
    this.favoritos.push(nuevoFavorito)
    //console.log(this.favoritos)
  }

  removeFavorito(id:string) {
    this.favoritos = this.favoritos.filter( f => f.imdbID != id )
    //console.log(`Nueva longitud: ${this.favoritos.length}`)
  }

  incluye(unFavorito:any) {
    let ciudadesFiltradas = this.favoritos.filter( f => f.imdbID == unFavorito.imdbID)
    return (ciudadesFiltradas.length > 0)
  }

  borrarFavoritos(){
    this.favoritos = []
  }
}
