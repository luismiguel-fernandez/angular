import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.css']
})
export class CorreoComponent implements OnInit {

  correo: any;

  constructor() {
    this.correo = {
      titulo: "Título del email",
      cuerpo: `Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        Cuerpo del email, Cuerpo del email, Cuerpo del email, Cuerpo del email,
        `,
      emisor: 'luismiguelfc@gmail.com',
      destinatario: 'luismiguel.fernandez@murciaeduca.es'
    }
  }

  ngOnInit(): void {
  }

}
