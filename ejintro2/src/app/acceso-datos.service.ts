import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccesoDatosService {

  private url = "http://my-json-server.typicode.com/luismiguel-fernandez/angular/piezas"

  constructor(private http: HttpClient) { }

  getDatos() {
    //return this.piezas
    return this.http.get(this.url) //devuelve un observable
  }
}
