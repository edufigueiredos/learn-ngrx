import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrementaContador, defineContador, IAppState, incrementaContador } from './store/app.state';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn-ngrx';
  contador$ = this.store.select('appStore').pipe(map(e => e.counter));

  constructor(private store: Store<{ appStore: IAppState }>) { }

  decrementar() {
    this.store.dispatch(decrementaContador());
  }

  incrementar() {
    this.store.dispatch(incrementaContador());
  }

  definirContador(valor: number) {
    this.store.dispatch(defineContador({payload: valor}))
  }
}
