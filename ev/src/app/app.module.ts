import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarRowComponent } from './car-row/car-row.component';
import { SidebarComponent } from './sidebar/sidebar.component';
<<<<<<< HEAD
import { FiltroPatronPipe } from './filtro-patron.pipe';
import { FiltroFabricantePipe } from './filtro-fabricante.pipe';
import { CatalogoCochesComponent } from './catalogo-coches/catalogo-coches.component';
import { PresentacionComponent } from './presentacion/presentacion.component';

import { RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const rutas = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PresentacionComponent},
  { path: 'catalogo', component: CatalogoCochesComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '**', component: Pagina404Component}
]
=======
import { PatternFilterPipe } from './pattern-filter.pipe';
>>>>>>> 6612e3c9433d5b36ca14c5a48290562d6c89f9be

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarRowComponent,
    SidebarComponent,
<<<<<<< HEAD
    FiltroPatronPipe,
    FiltroFabricantePipe,
    CatalogoCochesComponent,
    PresentacionComponent,
    ContactoComponent
=======
    PatternFilterPipe
>>>>>>> 6612e3c9433d5b36ca14c5a48290562d6c89f9be
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
