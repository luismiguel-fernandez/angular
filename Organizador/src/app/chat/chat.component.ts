import { Component, OnInit } from '@angular/core';
import { AccesoDatosService } from '../acceso-datos.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajes

  constructor(private basedatos:AccesoDatosService) { }

  ngOnInit(): void {
    this.basedatos.getMensajes().subscribe(
      (response) => {
        this.mensajes = response
      },
      (error) => {
        console.error("error")
      }
    )
  }

}
