import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { CatalogoCochesComponent } from './catalogo-coches/catalogo-coches.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { EvDetailsComponent } from './ev-details/ev-details.component';

const rutas = [
  { path: 'home', component: PresentacionComponent},
  { path: 'catalogo', component: CatalogoCochesComponent},
  { path: 'ev/:id', component: EvDetailsComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pagina404Component}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
