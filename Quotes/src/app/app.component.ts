import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' 
})    
export class AppComponent {
  quotes = [
    new Quote(1,'My first quote',"",new Date(2018,2,14),0,0),
    new Quote(2,'My second quote',"",new Date(2018,2,14),0,0),
  ]

}