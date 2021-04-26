import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImbdService {
  apikey = '&apikey=1171f65e';
  constructor(private httpClient: HttpClient) {}

  public recuperarDatos(): Observable<any> {
    return this.httpClient.get<any>(
      'http://www.omdbapi.com/?t=lord+of+the+rings' + this.apikey
    );
  }
}
