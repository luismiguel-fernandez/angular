import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgradecimientosComponent } from './agradecimientos/agradecimientos.component';
import { BuscadorConsultasComponent } from './buscador-consultas/buscador-consultas.component';
import { DetallesComponent } from './detalles/detalles.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoFavoritosComponent } from './listado-favoritos/listado-favoritos.component';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent},
  { path: 'favs', component: ListadoFavoritosComponent},
  { path: 'query', component: BuscadorConsultasComponent},
  { path: 'detail/:id', component: DetallesComponent},
  { path: 'thank', component: AgradecimientosComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
