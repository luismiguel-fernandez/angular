import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ChatComponent } from './chat/chat.component';
import { ModulosComponent } from './modulos/modulos.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { NuevoExamenComponent } from './nuevo-examen/nuevo-examen.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarioAngComponent } from './calendario-ang/calendario-ang.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

const rutas = [
  { path: '', component: CalendarioAngComponent},
  { path: 'calendario', component: CalendarioComponent },
  { path: 'modulos', component: ModulosComponent },
  { path: 'profesores', component: ProfesoresComponent }
  
]

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    ProfesoresComponent,
    ModulosComponent,
    CalendarioComponent,
    NuevoExamenComponent,
    CalendarioAngComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    CommonModule,
    FormsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
