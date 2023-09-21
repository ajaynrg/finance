import { Component, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.css']
})
export class AssetsTableComponent implements OnInit{
  assetsData: any;
  result: any;
  p: number = 1;
  // columnsToDisplay = ['rank', 'symbol','name','priceUsd','marketCapUsd','changePercent24Hr','volumeUsd24Hr'];
  constructor(private priceService: PriceService){
  }

  ngOnInit(){
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
