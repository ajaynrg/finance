import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {NgxPaginationModule} from 'ngx-pagination';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsTableComponent } from './components/assets-table/assets-table.component';
import { CurrencyDetailComponent } from './components/currency-detail/currency-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetsTableComponent,
    CurrencyDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
