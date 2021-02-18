import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarRowComponent } from './car-row/car-row.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FiltroPatronPipe } from './filtro-patron.pipe';
import { FiltroFabricantePipe } from './filtro-fabricante.pipe';
import { CatalogoCochesComponent } from './catalogo-coches/catalogo-coches.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ContactoComponent } from './contacto/contacto.component';

import { AppRoutingModule } from './app-routing.module';
import { EvDetailsComponent } from './ev-details/ev-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarRowComponent,
    SidebarComponent,
    FiltroPatronPipe,
    FiltroFabricantePipe,
    CatalogoCochesComponent,
    PresentacionComponent,
    ContactoComponent,
    EvDetailsComponent
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
