import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {NgxPaginationModule} from 'ngx-pagination';
import {DialogModule} from '@angular/cdk/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssetsTableComponent } from './components/assets-table/assets-table.component';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { GraphComponent } from './components/graph/graph.component';
@NgModule({
  declarations: [
    AppComponent,
    AssetsTableComponent,
    CurrencyDetailsComponent,
    GraphComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    NgxPaginationModule,
    DialogModule,
    MatProgressBarModule,
    MatTooltipModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
