import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
