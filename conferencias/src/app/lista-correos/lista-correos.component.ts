import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-correos',
  templateUrl: './lista-correos.component.html',
  styleUrls: ['./lista-correos.component.css']
})
export class ListaCorreosComponent implements OnInit {

  correos: any[];

  constructor() {
    const correo1 = {
      asunto: "Asunto del email",
      cuerpo: `Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        `,
      emisor: 'luismiguelfc@gmail.com',
      destinatario: 'luismiguel.fernandez@murciaeduca.es',
      leido: true
    }
    const correo2 = {
      asunto: "otro asunto de email",
      cuerpo: `rollo y chapa, rollo y chapa, rollo y chapa, rollo y chapa, 
      rollo y chapa, rollo y chapa, rollo y chapa, rollo y chapa, rollo y chapa, 
      rollo y chapa, rollo y chapa, rollo y chapa, rollo y chapa, rollo y chapa
        `,
      emisor: 'asdasd@gmail.com',
      destinatario: 'oleole@murciaeduca.es',
      leido: false
    }
    this.correos = [];
    this.correos.push(correo1,correo2);
  }

  ngOnInit(): void {
  }

}
