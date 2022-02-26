import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-ngrx';
  contador = 0;

  decrementar() {
    this.contador -= 1;
  }

  incrementar() {
    this.contador += 1;
  }
}
