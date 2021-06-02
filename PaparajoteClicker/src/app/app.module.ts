import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { ClickerComponent } from './clicker/clicker.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoreComponent } from './store/store.component';
import { StatsComponent } from './stats/stats.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    ClickerComponent,
    NavBarComponent,
    StoreComponent,
    StatsComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
