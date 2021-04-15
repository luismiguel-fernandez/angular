import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ChatComponent } from './chat/chat.component';
import { ModulosComponent } from './modulos/modulos.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const rutas = [
  { path: 'calendario', component: CalendarioComponent },
  { path: 'modulos', component: ModulosComponent },
  { path: 'profesores', component: ProfesoresComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
