import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaCiudadesService {

  private ciudades = [2513413,2988507,2267057]
  // [Murcia,Paris,Lisboa]

  constructor() { }

  getCiudades() {
    return this.ciudades
  }

  addCiudad(id: number) {
    if (id > 0)
      this.ciudades.push(id)
  }

}
