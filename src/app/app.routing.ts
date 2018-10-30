import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClusterComponent } from './cluster/cluster.component';
import { BasicComponent } from './basic/basic.component';
import { RasterComponent } from './raster/raster.component';
import { HomeComponent } from 'src/app/home/home.component';
import { BonbonDEX1Component } from 'src/app/bonbon-dex1/bonbon-dex1.component';
import { BonbonDEX2Component } from 'src/app/bonbon-dex2/bonbon-dex2.component';
import { CollectionComponent } from 'src/app/collection/collection.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'cluster', component: ClusterComponent },
  { path: 'raster', component: RasterComponent },
  { path: 'defaut', component: HomeComponent },
  { path: '', redirectTo: '/defaut', pathMatch: 'full' },
  { path: 'bonbon-dex1', component: BonbonDEX1Component},
  { path: 'bonbon-dex2/:id', component: BonbonDEX2Component},
  { path: 'collection', component: CollectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
