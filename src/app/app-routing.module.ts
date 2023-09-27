import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyDetailsComponent } from './components/currency-details/currency-details.component';
import { AssetsTableComponent } from './components/assets-table/assets-table.component';

const routes: Routes = [
  { path: '', component:  AssetsTableComponent},
  { path: 'details/:p/:id', component:  CurrencyDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
