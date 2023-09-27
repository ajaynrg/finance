import { Component, Input, OnInit } from '@angular/core';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit{
  @Input() id: any;
  history: any;
  constructor(private priceService: PriceService,){}
  ngOnInit(){
    this.priceService.getAssetHistory(this.id).subscribe((res)=>{
      this.history = res;
      this.history = this.history.data;
    });
    
  }
}
