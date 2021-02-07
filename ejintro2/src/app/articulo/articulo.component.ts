import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() piezaparam;
  @Output() avisoAlPadre = new EventEmitter<string>();
  
  constructor() {

   }

  ngOnInit(): void {
  }

  borrar(item) {
    console.log("soy el componente hijo");
    console.table(item);
    this.avisoAlPadre.emit(item);
  }

}
