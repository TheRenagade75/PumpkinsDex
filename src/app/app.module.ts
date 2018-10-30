import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {AppRoutingModule} from './app.routing';

import { AppComponent } from './app.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { BasicComponent } from './basic/basic.component';
import { ClusterComponent } from './cluster/cluster.component';
import { RasterComponent } from './raster/raster.component';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent,
    BasicComponent,
    ClusterComponent,
    RasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
