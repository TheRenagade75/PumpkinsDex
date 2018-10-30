import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BonbonDEX1Component } from '../bonbon-dex1/bonbon-dex1.component';
import { BonbonDEX2Component } from '../bonbon-dex2/bonbon-dex2.component';

const routes: Routes = [
  { path: 'defaut', component: HomeComponent },
  { path: '', redirectTo: '/defaut', pathMatch: 'full' },
  { path: 'bonbon-dex1', component: BonbonDEX1Component},
  { path: 'bonbon-dex2', component: BonbonDEX2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }
