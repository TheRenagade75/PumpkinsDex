import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BonbonDEX1Component } from './bonbon-dex1/bonbon-dex1.component';
import { BonbonDEX2Component } from './bonbon-dex2/bonbon-dex2.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CollectionComponent } from './collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BonbonDEX1Component,
    BonbonDEX2Component,
    HeaderComponent,
    FooterComponent,
    CollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
