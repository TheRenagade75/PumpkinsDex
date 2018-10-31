import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { AppRoutingModule } from './app.routing';
import { NgbModalModule, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { BasicComponent } from './basic/basic.component';
import { ClusterComponent } from './cluster/cluster.component';
import { RasterComponent } from './raster/raster.component';
import { HttpClientModule } from '@angular/common/http';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { HomeComponent } from './home/home.component';
import { BonbonDEX1Component } from './bonbon-dex1/bonbon-dex1.component';
import { BonbonDEX2Component } from './bonbon-dex2/bonbon-dex2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CollectionComponent } from './collection/collection.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GeolocationComponent,
    BasicComponent,
    ClusterComponent,
    RasterComponent,
    HeaderComponent,
    FooterComponent,
    CollectionComponent,
    HomeComponent,
    BonbonDEX1Component,
    BonbonDEX2Component,
    HeaderComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularOpenlayersModule,
    HttpClientModule,
    RoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
