import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { ClickerComponent } from './clicker/clicker.component';
import { StoreComponent } from './store/store.component';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ClickerComponent,
    StoreComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
