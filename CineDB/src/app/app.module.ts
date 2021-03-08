import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieComponent } from './pie/pie.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { InicioComponent } from './inicio/inicio.component';
import { AgradecimientosComponent } from './agradecimientos/agradecimientos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { BuscadorConsultasComponent } from './buscador-consultas/buscador-consultas.component';
import { ListadoFavoritosComponent } from './listado-favoritos/listado-favoritos.component';
import { FavoritoComponent } from './favorito/favorito.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieComponent,
    MenuNavegacionComponent,
    InicioComponent,
    AgradecimientosComponent,
    DetallesComponent,
    Pagina404Component,
    BuscadorConsultasComponent,
    ListadoFavoritosComponent,
    FavoritoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
