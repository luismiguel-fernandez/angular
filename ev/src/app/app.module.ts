import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarCardComponent } from './car-card/car-card.component';
import { CarRowComponent } from './car-row/car-row.component';

@NgModule({
  declarations: [
    AppComponent,
    CarCardComponent,
    CarRowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
