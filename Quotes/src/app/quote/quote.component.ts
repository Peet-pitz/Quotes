import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Either way, I think we can all do with a bit more spark to help us perform miracles and live in joy.',"",new Date(2018,3,14),0,0),
    new Quote(2,'Dear Math, please grow up and solve your own problems, I am tired of solving them for you.',"",new Date(2018,6,9),0,0),
  ]
  quoteVote(isVote,index){
    if(isVote){
      this.quotes[index].vote+=1;
    }else {
      this.quotes[index].disvote+=1;
    }
  }

  deleteQuote(isComplete,index){
    if (isComplete){
         let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

         if(toDelete){

         
      this.quotes.splice(index,1);
    }
  }
  }
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
