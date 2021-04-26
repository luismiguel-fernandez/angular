import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';
import { PieComponent } from './pie/pie.component';
import { InicioComponent } from './menu-navegacion/inicio/inicio.component';
import { ListadoFavoritosComponent } from './menu-navegacion/listado-favoritos/listado-favoritos.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';
import { BuscadorConsultasComponent } from './buscador-consultas/buscador-consultas.component';
import { AgradecimientosComponent } from './menu-navegacion/agradecimientos/agradecimientos.component';
import { FavoritoComponent } from './menu-navegacion/listado-favoritos/favorito/favorito.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    MenuNavegacionComponent,
    PieComponent,
    InicioComponent,
    ListadoFavoritosComponent,
    ListadoFavoritosComponent,
    PaginaNoEncontradaComponent,
    BuscadorConsultasComponent,
    AgradecimientosComponent,
    FavoritoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
