import { PriceService } from './../../services/price.service';
import { Component, Input, OnDestroy, OnInit, } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-currency-details',
  templateUrl: './currency-details.component.html',
  styleUrls: ['./currency-details.component.css']
})
export class CurrencyDetailsComponent implements OnInit, OnDestroy{
  id: any;
  currentPrice: any;
  assetDetails: any;
  circulatingSupply: any = 0;
  volume_MarketCap24h: any;
  p: any;

  constructor(
    private route: ActivatedRoute,
    private priceService: PriceService,
    private router: Router,
    private paginationService: PaginationService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap)=>{
      this.id = params.get('id');
      this.p = params.get('p');
    });
    this.paginationService.p = this.p;
    this.getLivePrice();
    this.getDetails();
  }
  getLivePrice(){
    this.priceService.openWebSocketForLivePrices(this.id);
    this.priceService.text.subscribe((price)=>{
      this.currentPrice = price[this.id];
    });
  }
  getDetails(){
    this.priceService.getAssetDetails(this.id).subscribe((res)=>{
      this.assetDetails = res;
      this.assetDetails = this.assetDetails.data;
      this.circulatingSupply = (this.assetDetails?.supply / this.assetDetails?.maxSupply) * 100;
      this.volume_MarketCap24h = (this.assetDetails?.volumeUsd24Hr / this.assetDetails?.marketCapUsd) * 100;
    });
  }

  ngOnDestroy(){
    this.priceService.closeWebSocketForLivePrices();
  }
}
