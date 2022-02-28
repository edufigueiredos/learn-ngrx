import { appSelector, contadorSelector } from './store/app.selectors';
import { ITodo } from './models/todo.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementaContador, defineContador, IAppState, incrementaContador } from './store/app.state';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'learn-ngrx';
  contador$ = this.store.select(contadorSelector);

  constructor(private store: Store) { }

  ngOnInit(): void {

  }

  decrementar() {
    this.store.dispatch(decrementaContador());
  }

  incrementar() {
    this.store.dispatch(incrementaContador());
  }

  definirContador(valor: number) {
    this.store.dispatch(defineContador({ payload: valor }))
  }
}
