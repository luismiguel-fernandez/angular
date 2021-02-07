import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 0
  piezas = []

  constructor() {
    setInterval( 
      () => {this.title = Math.floor(Math.random()*100)},
      2000
    )

    const pieza1 = { 
      nombre: "AMD Ryzen 5 3600",
      precio: 249.90,
      imagen: "https://thumb.pccomponentes.com/w-530-530/articles/21/213019/5-3.jpg",
      stock: false
    }
    const pieza2 = {
      nombre: "MSI B550i",
      precio: 179.90,
      imagen: "https://thumb.pccomponentes.com/w-530-530/articles/32/324454/1716-msi-mpg-b550i-gaming-edge-wifi.jpg",
      stock: true
    }
    this.piezas = []
    this.piezas.push(pieza1,pieza2)

  } //FIN DEL CONSTRUCTOR

  borrar(item) {
    this.piezas = this.piezas.filter(elemento => elemento !== item)
  }
} // FIN DE LA CLASE
