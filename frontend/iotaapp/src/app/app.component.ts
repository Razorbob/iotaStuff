import { Component } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

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
      
      next: msg => console.log(msg), // Called whenever there is a message from the server.
      error: err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
      complete: () => console.log('complete') // Called when connection is closed (for whatever reason).
    });
  }
  
}

  




