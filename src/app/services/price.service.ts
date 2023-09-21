import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {
  text: Subject<any> = new Subject<any>;
  socket = new WebSocket('wss://ws.coincap.io/prices?assets=ALL');
  constructor(private http: HttpClient){}

  getResult(){
    this.socket.addEventListener("message", (event:any) => {
      this.text.next(event.data);
    });
  }

  getAssets(){
    return this.http.get('https://api.coincap.io/v2/assets');
  }
}
