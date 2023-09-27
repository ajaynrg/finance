import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  text: Subject<any> = new Subject<any>;
  socket: any;
  event: any;
  constructor(private http: HttpClient){}

  openWebSocketForLivePrices(id: any){
    this.socket = new WebSocket('wss://ws.coincap.io/prices?assets='+id);
    this.event = this.socket.addEventListener("message", (event:any) => {
      this.text.next(JSON.parse(event.data));
    });
  }

  closeWebSocketForLivePrices(){
    this.socket.close();
  }

  getAssets(){
    return this.http.get('https://api.coincap.io/v2/assets');
  }

  getAssetDetails(id: any){
    return this.http.get('https://api.coincap.io/v2/assets/'+id);
  }

  getAssetHistory(id: any){
    return this.http.get('https://api.coincap.io/v2/assets/'+id+'/history?interval=d1');
  }
}
