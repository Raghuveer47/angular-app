import { Component } from '@angular/core';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent {
  counter: number = 0;

  increaseCounter() {
    this.counter++;
  }

  decreaseCounter() {
    this.counter--;
  }

  paragraphStyles = {
    'color': 'blue',
    'font-size': '20px',
    'background-color': 'lightgray',
    'padding': '10px'
  };
}


