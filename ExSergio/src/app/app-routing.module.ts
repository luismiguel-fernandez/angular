import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgradecimientosComponent } from './menu-navegacion/agradecimientos/agradecimientos.component';
import { BuscadorConsultasComponent } from './buscador-consultas/buscador-consultas.component';
import { InicioComponent } from './menu-navegacion/inicio/inicio.component';
import { ListadoFavoritosComponent } from './menu-navegacion/listado-favoritos/listado-favoritos.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'favs', component: ListadoFavoritosComponent },
  { path: 'query', component: BuscadorConsultasComponent },
  { path: 'thank', component: AgradecimientosComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PaginaNoEncontradaComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
