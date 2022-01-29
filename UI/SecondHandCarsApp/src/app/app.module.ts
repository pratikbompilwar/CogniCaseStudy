import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './Services/car.service';
import { CarsComponent } from './Components/cars/cars.component';
import { SortByPipe } from './Pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    NoopAnimationsModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    HttpClientModule
  ],
  exports: [
    MatSidenavModule,
    SortByPipe
  ],
  providers: [HttpClientModule,CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
