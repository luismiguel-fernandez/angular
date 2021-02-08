import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-nuevo-correo',
  templateUrl: './nuevo-correo.component.html',
  styleUrls: ['./nuevo-correo.component.css']
})
export class NuevoCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.nuevoCorreo = this.formBuilder.group({
      asunto: ['', [Validators.required, Validators.minLength(3)]],
      cuerpo: ['', [Validators.required, Validators.minLength(10)]],
      destinatario: ['', [Validators.required, Validators.email]]
    });
  }

  // get formulario() {return this.nuevoCorreo.controls}

  onSubmit() {
    this.submitted = true;

    if (this.nuevoCorreo.invalid) {
      console.log("correo inválido");
      return;
    }
        
    console.log("correo válido");
    let correo = this.nuevoCorreo.value;
    correo.leido = false;
    correo.emisor = "luismiguel.fernandez@murciaeduca.es";
    console.table(correo)

    alert("Correo enviado");
    this.onReset();
  }

  onReset() {
    this.submitted = false;
    this.nuevoCorreo.reset();
  }

}
