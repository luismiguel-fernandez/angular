import { Component, OnInit } from '@angular/core';

import { ImbdService } from 'src/app/imbd.service';

@Component({
  selector: 'app-listado-favoritos',
  templateUrl: './listado-favoritos.component.html',
  styleUrls: ['./listado-favoritos.component.css'],
})
export class ListadoFavoritosComponent implements OnInit {
  public listadoFavoritos: any = [];
  constructor(private imbdService: ImbdService) {}

  ngOnInit(): void {
    this.recuperarDatos();
  }
  private recuperarDatos(): void {
    this.imbdService.recuperarDatos().subscribe(
      (data) => {
        this.listadoFavoritos.push(data);
      },
      (error) => {},
      () => {}
    );
  }
}
