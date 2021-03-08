import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosCineService {

  private url = "http://omdbapi.com/"
  private apiKey = "1171f65e"

  constructor(private http: HttpClient) {
  }

  buscarPorId(id: string | number) {
    return this.http.get(this.url + "?i=" + id + "&apikey=" + this.apiKey)
  }
  buscarPorNombre(patron: string) {
    if (patron && patron.length) {
      return this.http.get(this.url + "?s=" + patron + "&apikey=" + this.apiKey)
    } else {
      return new Observable()
    }
  }
}


