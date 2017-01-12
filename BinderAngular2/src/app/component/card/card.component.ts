import {Component, Output, Input} from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styles: []
})


export class CardComponent {
  @Input() addCard: string = 'no';
  isAddCard(){
    if(this.addCard ==='yes'){
      return false;
    }
    return true;
  }
}


