import { Component } from '@angular/core';
import { PriceService } from './services/price.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result: any;
  constructor(private priceService: PriceService){
    // this.priceService.getResult();
  }

  ngOnInit(){
    // this.priceService.text.subscribe((res)=>{
    //   this.result = res;
    // });
  }
}
