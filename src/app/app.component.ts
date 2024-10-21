import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoComponent } from './two/two.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  username: string = '';
  password: string = '';
  isValid: boolean = false;
  isSubmitted: boolean = false;

  checkLogin() {
    this.isSubmitted = true;
    if (this.username === 'user' && this.password === 'password') {
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  } 
}

