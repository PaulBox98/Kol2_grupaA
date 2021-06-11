import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersPPComponent } from './components/orders-pp/orders-pp.component';
import { OrdersItemPPComponent } from './components/orders-item-pp/orders-item-pp.component';
import { OrdersDetailsPPComponent } from './components/orders-details-pp/orders-details-pp.component';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/pp-data.service';

@NgModule({
  declarations: [
    AppComponent,
    OrdersPPComponent,
    OrdersItemPPComponent,
    OrdersDetailsPPComponent,
    OrdersPPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
