import { ParsedEvent } from '@angular/compiler';
import { Component } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import web3 from "web3";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iotaapp';

  subject = webSocket('ws://localhost:8087');
  constructor(){
    console.log("Starting webservice")
    this.subject.subscribe({
      
      next: msg => {
        const stringMessage = JSON.stringify(msg);
        const paresed = JSON.parse(stringMessage);
        let payloadString = "";
        if(paresed.payload.type == 5){
          payloadString = web3.utils.hexToAscii(paresed.payload.data);
        }else {
          payloadString = paresed.payload;
        }
        console.log(payloadString);
      }, // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });
  }
  
}

  




