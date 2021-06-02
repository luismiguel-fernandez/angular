import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './options/options.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'stats', component: StatsComponent},
  { path: 'options', component: OptionsComponent},
  { path: '', redirectTo: '/stats', pathMatch: 'full'},
  { path: '**', redirectTo:  '/stats', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
