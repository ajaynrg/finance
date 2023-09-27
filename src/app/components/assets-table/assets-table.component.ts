import { PaginationService } from './../../services/pagination.service';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.css']
})
export class AssetsTableComponent implements OnInit{
  assetsData: any;
  result: any;
  p: any = 1;
  pageSize = 25;
  // columnsToDisplay = ['rank', 'symbol','name','priceUsd','marketCapUsd','changePercent24Hr','volumeUsd24Hr'];
  constructor(
    private priceService: PriceService,
    private paginationService: PaginationService){
  }

  ngOnInit(){
    this.p = this.paginationService.p;
    this.priceService.getAssets().subscribe((res)=>{
      this.assetsData = res;
    });
    this.getAssetsData();
  }
  getAssetsData(){
    setInterval(()=>{
      this.priceService.getAssets().subscribe((res)=>{
        this.assetsData = res;
      });
    },2000);
  }
}
