import { map } from 'rxjs/operators';
import { IAppState } from './../store/app.state';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.css']
})
export class DisplayContadorComponent implements OnInit {

  contador$ = this.store.select('appStore').pipe(map(e => e.counter));
  constructor(private store: Store<{ appStore: IAppState }>) { }


  ngOnInit(): void {
  }

}
